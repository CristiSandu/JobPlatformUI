import { useEffect, useState } from "react";
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

  const [dropdownElements, setDropdownElements] = useState<DomainModel[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

      const jobsList = await jobsValues.getJobs({
        isRecruter: usersList[0].type === "Recruiter",
        isAdmin: usersList[0].isAdmin,
        userID: uid,
      });

      elementDropdown.unshift({ name: "Domain" });

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
      const elements = initialJobsList?.filter((elem) => true);
      setElementsList(elements);
    } else {
      const elements = initialJobsList?.filter((elem) => true);
      setElementsList(elements);
    }
  }
  const navigate = useNavigate();

  let elementsRendered = elementsList?.map((element: JobExtendedModel) => (
    <JobUserCardElement jobInfo={element} />
  ));
  return (
    <>
      <PageFooterHeaderTemplate isAdmin={false}>
        <div className="pt-8 w-full">
          <div className="space-y-12 scroll">
            <div className="space-y-6">
              <button
                className="btn-primary text-2xl w-full focus:bg-LightBlue"
                onClick={() => {
                  navigate("/jobDataForm");
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
            <div className="space-y-5">
              {isLoading ? (
                <div className="grid place-items-center h-96">
                  <LoadingSpinner />
                </div>
              ) : (
                elementsRendered
              )}
            </div>
          </div>
        </div>
      </PageFooterHeaderTemplate>
    </>
  );
};
