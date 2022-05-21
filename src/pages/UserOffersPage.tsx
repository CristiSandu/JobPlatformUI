import { useEffect, useRef, useState } from "react";
import DropdownElement from "../components/DropdownElement";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import JobUserCardElement, {
  JobUserCardParameter,
} from "../components/JobUserCardElement";
import { useNavigate } from "react-router-dom";
import {
  DomainModel,
  DomainModelExtended,
  DropdownClient,
  JobExtendedModel,
  JobsClient,
  User,
} from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../provider/firebase";
import { isNullOrUndefined } from "../util/generic-helpers";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ButtonsType } from "../util/constants";
import NoDataImage from "../Images/no_data_logo.svg";
import NoDataComponent from "../components/NoDataComponent";

export type OffersListParams = {
  initialsElements: JobUserCardParameter[];
};

export const UserOffersPage = ({
  initialsElements,
}: OffersListParams): JSX.Element => {
  const [elementsList, setElementsList] = useState<JobExtendedModel[]>();
  const [initialJobsList, setInitialJobsList] = useState<JobExtendedModel[]>();

  const [userData, setUserData] = useState<User>();

  const [dropdownElements, setDropdownElements] =
    useState<DomainModelExtended[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isRecruiter, setIsRecruiter] = useState<boolean>(false);

  const [user, loading] = useAuthState(auth);

  const jobsValues = new JobsClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  useEffect(() => {
    const dropdownsValues = new DropdownClient(
      process.env.REACT_APP_UI_SERVICE,
      AxiosHelpers.axiosClient
    );

    const fetchData = async () => {
      setIsLoading(true);

      const elementDropdown = await dropdownsValues.domainsAndNumbers(false);

      let newObject = window.localStorage.getItem("userInfo");
      let newobj = !isNullOrUndefined(newObject) ? newObject : "";
      const userinfo: User = JSON.parse(newobj);

      setIsRecruiter(userinfo?.type === "Recruiter");

      setUserData(userinfo);

      const jobsList = await jobsValues.getJobs({
        isRecruter: userinfo.type === "Recruiter",
        isAdmin: userinfo.isAdmin,
        userID: userinfo.documentId,
      });

      elementDropdown.unshift({ name: "Domains" });

      setIsLoading(false);
      setElementsList(jobsList);
      setInitialJobsList(jobsList);
      setDropdownElements(elementDropdown);
    };

    fetchData().catch(console.error);
  }, [user, loading]);

  function selectedElementChange(element: string, dropdownName: string): void {
    if (element === "Domains") {
      setElementsList(initialJobsList);
      return;
    }
    const elements = initialJobsList?.filter((elem) => elem.domain === element);
    setElementsList(elements);
  }

  function onClickFilter(filterName: string): void {
    if (filterName === "My Offers") {
      const elements = initialJobsList?.filter((elem) => elem.isMine === true);
      setElementsList(elements);
      return;
    } else if (filterName === "true") {
      const elements = initialJobsList?.filter(
        (elem) =>
          !isNullOrUndefined(elem.numberEmp) &&
          !isNullOrUndefined(elem.numberApplicants) &&
          elem.numberEmp <= elem.numberApplicants
      );
      setElementsList(elements);
    } else {
      const elements = initialJobsList?.filter(
        (elem) =>
          !isNullOrUndefined(elem.numberEmp) &&
          !isNullOrUndefined(elem.numberApplicants) &&
          elem.numberEmp > elem.numberApplicants
      );
      setElementsList(elements);
    }
  }
  const navigate = useNavigate();

  const elementsRendered = useRef<JSX.Element[]>();

  elementsRendered.current = elementsList?.map((element: JobExtendedModel) => (
    <JobUserCardElement
      jobInfo={element}
      buttonsType={
        !element.isApplied && userData?.type === "Candidate"
          ? ButtonsType.UserJobApplyButton
          : element.isMine && userData?.type === "Recruiter"
          ? ButtonsType.RecruiterJobButtons
          : ButtonsType.DefaultCancel
      }
    />
  ));
  useEffect(() => {
    elementsRendered.current = elementsList?.map(
      (element: JobExtendedModel) => (
        <JobUserCardElement
          jobInfo={element}
          buttonsType={
            !element.isApplied && userData?.type === "Candidate"
              ? ButtonsType.UserJobApplyButton
              : element.isMine && userData?.type === "Recruiter"
              ? ButtonsType.RecruiterJobButtons
              : ButtonsType.DefaultCancel
          }
        />
      )
    );
  }, [elementsList]);

  return (
    <>
      <PageFooterHeaderTemplate isAdmin={false}>
        <div className="pt-8 w-full">
          <div className="space-y-12 h-screen">
            {!isRecruiter && (
              <div className="flex justify-between">
                <input
                  className="entry-primary shadow-md w-96"
                  type="text"
                  name="search"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setElementsList(initialJobsList);
                    } else {
                      const elements = initialJobsList?.filter((x) =>
                        x.name
                          ?.toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      );
                      setElementsList(elements);
                    }
                  }}
                  placeholder="Search ..."
                />
                <DropdownElement
                  dropdownName="Domains"
                  selectedElementChange={selectedElementChange}
                  elements={dropdownElements}
                />
              </div>
            )}
            {isRecruiter && (
              <div className="space-y-6">
                <button
                  className="btn-primary text-2xl w-full focus:bg-LightBlue"
                  onClick={() => {
                    navigate("/jobDataForm", { state: userData });
                  }}
                >
                  + Add A Offer
                </button>
                <div className="flex justify-between">
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      className="btn-primary focus:bg-LightBlue"
                      onClick={() => onClickFilter("false")}
                    >
                      Not Full
                    </button>
                    <button
                      className="btn-primary focus:bg-LightBlue"
                      onClick={() => {
                        onClickFilter("true");
                      }}
                    >
                      Full
                    </button>
                    <button
                      className="btn-primary focus:bg-LightBlue"
                      onClick={() => onClickFilter("My Offers")}
                    >
                      My Offers
                    </button>
                  </div>
                  <DropdownElement
                    dropdownName="Domains"
                    selectedElementChange={selectedElementChange}
                    elementsWithCount={dropdownElements}
                  />
                </div>
              </div>
            )}
            <div className="space-y-5">
              {isLoading ? (
                <div className="grid place-items-center h-96">
                  <LoadingSpinner />
                </div>
              ) : elementsList?.length !== 0 ? (
                elementsRendered.current
              ) : (
                <NoDataComponent
                  imageName={NoDataImage}
                  height={"top-60 left-1/3"}
                  text="No Data"
                />
              )}
            </div>
          </div>
        </div>
      </PageFooterHeaderTemplate>
    </>
  );
};
