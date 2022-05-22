import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DomainModel,
  DropdownClient,
  Job,
  JobsClient,
  User,
} from "../api/ui-service-client";
import DropdownElement from "../components/DropdownElement";
import FormImage from "../Images/form_logo.svg";
import { AxiosHelpers } from "../util/axios-helper";
import { RoutesList } from "../util/constants";
import { isNullOrUndefined } from "../util/generic-helpers";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import { auth, signOut } from "../provider/firebase";

export const JobDescriptionFormPage = (): JSX.Element => {
  const [jobData, setJobData] = useState<Job>({});
  const [dropdownElements, setDropdownElements] = useState<DomainModel[]>();
  const [userData, setUserData] = useState<User>();
  const [isForUpdate, setIsForUpdate] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const [user, loading, error] = useAuthState(auth);

  const jobInstance = new JobsClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  const dropdownsValues = new DropdownClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  let newObject = window.localStorage.getItem("userInfo");
  let newobj = !isNullOrUndefined(newObject) ? newObject : "";
  const userinfo: User = JSON.parse(newobj);

  useEffect(() => {
    const fetchData = async () => {
      const element = await dropdownsValues.domainsAll();
      element.unshift({ name: "Domain" });
      setDropdownElements(element);
      if (!isNullOrUndefined(location.state)) {
        setJobData(location.state as Job);

        setIsForUpdate(true);
      } else {
        setIsForUpdate(false);
      }
    };

    fetchData().catch(console.error);
  }, [user, loading]);

  function selectedElementChange(element: string, dropdownName: string): void {
    switch (dropdownName) {
      case "Domain":
        setJobData({ ...jobData, domain: element });
        break;
    }
  }

  return (
    <>
      <PageFooterHeaderTemplate isAdmin={false}>
        <div className="flex h-screen w-screen">
          <img
            className="absolute top-40 left-40 z-0 "
            src={FormImage}
            height="244"
            width="410"
            alt="React Logo"
          />

          <div className="space-y-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 w-max">
            <div className="space-y-3 ">
              <form className="space-y-4 align-baseline w-full">
                <div>
                  <input
                    className="entry-primary w-96"
                    type="text"
                    name="name"
                    onChange={(e) =>
                      setJobData({ ...jobData, name: e.target.value })
                    }
                    defaultValue={jobData.name ?? ""}
                    placeholder="Full Job Name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 w-96">
                  <DropdownElement
                    selectedElementChange={selectedElementChange}
                    dropdownName="Domain"
                    preSelectedElement={jobData.domain}
                    elements={dropdownElements}
                  />
                  <input
                    className="entry-primary "
                    type="number"
                    name="name"
                    onChange={(e) =>
                      setJobData({
                        ...jobData,
                        numberEmp: +e.target.value,
                      })
                    }
                    defaultValue={jobData.numberEmp ?? ""}
                    placeholder="Number"
                  />
                </div>
                <div>
                  <textarea
                    className="entry-primary w-96 h-56"
                    name="name"
                    onChange={(e) =>
                      setJobData({
                        ...jobData,
                        description: e.target.value,
                      })
                    }
                    defaultValue={jobData.description ?? ""}
                    placeholder="Description"
                  />
                </div>
                <div>
                  <input
                    className="entry-primary w-96"
                    type="text"
                    onChange={(e) =>
                      setJobData({ ...jobData, address: e.target.value })
                    }
                    defaultValue={jobData.address ?? ""}
                    name="Location"
                    placeholder="Location"
                  />
                </div>
              </form>
              <div className="flex justify-between">
                <div className="text-xl">{userData?.name}</div>
                <div className="text-xl">
                  {!isForUpdate
                    ? dayjs(Date.now()).format("DD.MM.YYYY")
                    : dayjs(jobData.date).format("DD.MM.YYYY")}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 px-4 pt-8">
                <button
                  className="btn-primary"
                  onClick={async () => {
                    if (!isForUpdate) {
                      jobData.documentId = "default";
                      jobData.numberApplicants = 0;
                      jobData.isCheck = false;
                      jobData.isExpired = false;
                      jobData.recruterID = userData?.documentId;
                      jobData.date = dayjs(Date.now());
                      jobData.recruterName = userData?.name;
                      const response: boolean = await jobInstance.jobsPOST({
                        jobData: jobData,
                      });
                      if (response) {
                        navigate(RoutesList.HomePage);
                      } else {
                        alert("Error on Save, Retry");
                      }
                    } else {
                      if (!isNullOrUndefined(jobData.documentId)) {
                        jobData.recruterName = userinfo.name;
                        jobData.isCheck = true;

                        const response: boolean = await jobInstance.jobsPUT(
                          jobData.documentId,
                          {
                            jobData: jobData,
                          }
                        );

                        if (response) {
                          navigate(RoutesList.Back);
                        } else {
                          alert("Error on Save, Retry");
                        }
                      }
                    }
                  }}
                >
                  Save
                </button>
                <div />
                <button
                  className="btn-primary"
                  onClick={() => {
                    navigate(RoutesList.Back);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageFooterHeaderTemplate>
    </>
  );
};
