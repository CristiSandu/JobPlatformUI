import { useEffect, useRef, useState } from "react";
import DropdownElement from "../components/DropdownElement";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import JobUserCardElement, {
  JobUserCardParameter,
} from "../components/JobUserCardElement";
import { useNavigate } from "react-router-dom";
import {
  DomainModel,
  DropdownClient,
  JobExtendedModel,
  JobsClient,
  User,
  UsersClient,
} from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../provider/firebase";
import { isNullOrUndefined } from "../util/generic-helpers";
import { LoadingSpinner } from "../components/LoadingSpinner";

export type OffersListParams = {
  initialsElements: JobUserCardParameter[];
};

export const UserOffersPage = ({
  initialsElements,
}: OffersListParams): JSX.Element => {
  const [elementsList, setElementsList] = useState<JobExtendedModel[]>();
  const [initialJobsList, setInitialJobsList] = useState<JobExtendedModel[]>();

  const [userData, setUserData] = useState<User>();

  const [dropdownElements, setDropdownElements] = useState<DomainModel[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isRecruiter, setIsRecruiter] = useState<boolean>(false);

  const [user, loading] = useAuthState(auth);

  const jobsValues = new JobsClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  const usersValues = new UsersClient(
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

      const uid = user?.uid;
      if (isNullOrUndefined(uid)) return;

      const elementDropdown = await dropdownsValues.domainsAll();
      const usersList = await usersValues.usersAll(uid ?? "");

      if (isNullOrUndefined(usersList) || isNullOrUndefined(usersList[0]))
        return;

      localStorage.setItem(
        "userType",
        (usersList[0].type === "Recruiter").toString()
      );
      setIsRecruiter(usersList[0].type === "Recruiter");

      setUserData(usersList[0]);

      const jobsList = await jobsValues.getJobs({
        isRecruter: usersList[0].type === "Recruiter",
        isAdmin: usersList[0].isAdmin,
        userID: uid,
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
    <JobUserCardElement jobInfo={element} />
  ));
  useEffect(() => {
    elementsRendered.current = elementsList?.map(
      (element: JobExtendedModel) => <JobUserCardElement jobInfo={element} />
    );
  }, [elementsList]);

  return (
    <>
      <PageFooterHeaderTemplate isAdmin={false}>
        <div className="pt-8 w-full">
          <div className="space-y-12 scroll">
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
                        x.name?.includes(e.target.value)
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
                      onClick={() => onClickFilter("true")}
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
                    elements={dropdownElements}
                  />
                </div>
              </div>
            )}
            <div className="space-y-5">
              {isLoading ? (
                <div className="grid place-items-center h-96">
                  <LoadingSpinner />
                </div>
              ) : (
                elementsRendered.current
              )}
            </div>
          </div>
        </div>
      </PageFooterHeaderTemplate>
    </>
  );
};
