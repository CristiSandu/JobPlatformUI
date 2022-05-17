import { useEffect, useState } from "react";
import DropdownElement from "../components/DropdownElement";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import JobCardElement from "../components/JobCardElement";
import { JobUserCardParameter } from "../components/JobUserCardElement";
import {
  DomainModel,
  DropdownClient,
  JobExtendedModel,
  JobsClient,
  UsersClient,
} from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";
import { auth, signIn, signUpWithGoogle } from "../provider/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { isNullOrUndefined } from "../util/generic-helpers";
import { LoadingSpinner } from "../components/LoadingSpinner";

export type UserCardParameter = {
  domain: string;
  email: string;
  gender: string;
  type: string;
  age: string;
  name: string;
};

export type ElementsListParams = {
  initialsElements: JobUserCardParameter[];
};

export const CheckOffersPage = ({
  initialsElements,
}: ElementsListParams): JSX.Element => {
  const [elementsList, setElementsList] = useState<JobExtendedModel[]>();
  const [initialJobsList, setInitialJobsList] = useState<JobExtendedModel[]>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, loading, error] = useAuthState(auth);

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
    if (filterName === "All") {
      setElementsList(initialJobsList);
      return;
    }

    if (filterName === "true") {
      const elements = initialJobsList?.filter((elem) => elem.isCheck);
      setElementsList(elements);
      return;
    }

    const elements = initialJobsList?.filter((elem) => !elem.isCheck);
    setElementsList(elements);
  }

  const [dropdownElements, setDropdownElements] = useState<DomainModel[]>();

  useEffect(() => {
    const dropdownsValues = new DropdownClient(
      process.env.REACT_APP_UI_SERVICE,
      AxiosHelpers.axiosClient
    );
    const fetchData = async () => {
      const element = await dropdownsValues.domainsAll();

      element?.unshift({ name: "Domains" });
      setDropdownElements(element);
    };

    fetchData().catch(console.error);
  }, []);

  function checkAJobCall(jobId: string, value: boolean): void {
    const fetchData = async () => {
      setIsLoading(true);
      const response = jobsValues.validateJob({ isCheck: value, jobId: jobId });
      if (!response) alert("Error on Check Job Offer");

      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }

  let elementsRendered = elementsList?.map((element: JobExtendedModel) => (
    <JobCardElement jobInfo={element} checkAJobCall={checkAJobCall} />
  ));
  return (
    <>
      <PageFooterHeaderTemplate isAdmin={true}>
        <div className="pt-8 w-full">
          <div className="space-y-12 scroll">
            <span className="font-sans text-3xl font-semibold pb-12">
              Offers
            </span>
            <div className="flex justify-between">
              <div className="grid grid-cols-3 gap-4">
                <button
                  className="btn-primary focus:bg-LightBlue"
                  onClick={() => onClickFilter("false")}
                >
                  To Check
                </button>
                <button
                  className="btn-primary focus:bg-LightBlue"
                  onClick={() => onClickFilter("true")}
                >
                  Checked
                </button>
                <button
                  className="btn-primary focus:bg-LightBlue"
                  onClick={() => onClickFilter("All")}
                >
                  All
                </button>
              </div>
              <DropdownElement
                dropdownName="Domains"
                selectedElementChange={selectedElementChange}
                elements={dropdownElements}
              />
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
