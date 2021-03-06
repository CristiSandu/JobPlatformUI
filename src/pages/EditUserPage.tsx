import { useEffect, useState } from "react";
import DropdownElement from "../components/DropdownElement";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import UserCardElement from "../components/UserCardElement";
import {
  DomainModelExtended,
  DropdownClient,
  User,
  UsersClient,
} from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ButtonsType, UserTypeConst } from "../util/constants";
import NoDataComponent from "../components/NoDataComponent";
import NoDataImage from "../Images/no_data_logo.svg";

export type UserCardParameter = {
  domain: string;
  email: string;
  gender: string;
  type: string;
  age: string;
  name: string;
};

export const EditUserPage = (): JSX.Element => {
  const [elementsList, setElementsList] = useState<User[]>();
  const [initialUsersList, setInitialUsersList] = useState<User[]>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [dropdownElements, setDropdownElements] =
    useState<DomainModelExtended[]>();

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
      const elementDropdown = await dropdownsValues.domainsAndNumbers(true);
      const usersList = await usersValues.usersAll("All");
      elementDropdown.unshift({ name: "Domain" });

      setIsLoading(false);
      setElementsList(usersList);
      setInitialUsersList(usersList);
      setDropdownElements(elementDropdown);
    };

    fetchData().catch(console.error);
  }, []);

  function selectedElementChange(element: string, dropdownName: string): void {
    if (element === "Domain") {
      setElementsList(initialUsersList);
      return;
    }
    const elements = initialUsersList?.filter(
      (elem) => elem.domain === element
    );
    setElementsList(elements);
  }

  function deleteUserCall(UID: string): void {
    const fetchData = async () => {
      setIsLoading(true);
      const isDeleted = await usersValues.usersDELETE(UID);
      // const [elementsList, setElementsList] = useState<User[]>();
      // const [initialUsersList, setInitialUsersList] = useState<User[]>();
      if (isDeleted) {
        const elements = elementsList?.filter(
          (elem) => elem.documentId !== UID
        );
        const elements2 = initialUsersList?.filter(
          (elem) => elem.documentId !== UID
        );

        setElementsList(elements);
        setInitialUsersList(elements2);
      }
      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }

  function onClickFilter(filterName: string): void {
    if (filterName === "All") {
      setElementsList(initialUsersList);
      return;
    }
    const elements = initialUsersList?.filter(
      (elem) => elem.type === filterName
    );
    setElementsList(elements);
  }

  let elementsRendered = elementsList?.map((element: User) => (
    <UserCardElement
      userInfo={element}
      deleteUserCall={deleteUserCall}
      buttonsType={ButtonsType.AdminUserButtons}
    />
  ));
  return (
    <>
      <PageFooterHeaderTemplate isAdmin={true}>
        {isLoading ? (
          <div className="space-y-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="pt-8 w-full h-screen">
            <div className="space-y-12 scroll">
              <span className="font-sans text-3xl font-semibold pb-12">
                Users
              </span>
              <div className="flex justify-between">
                <div className="grid grid-cols-3 gap-4">
                  <button
                    className="btn-primary focus:bg-LightBlue"
                    onClick={() => onClickFilter(UserTypeConst.Candidate)}
                  >
                    employee
                  </button>
                  <button
                    className="btn-primary focus:bg-LightBlue"
                    onClick={() => onClickFilter(UserTypeConst.Recruiter)}
                  >
                    recruiters
                  </button>
                  <button
                    className="btn-primary focus:bg-LightBlue"
                    onClick={() => onClickFilter("All")}
                  >
                    All
                  </button>
                </div>
                <DropdownElement
                  dropdownName="Domain"
                  selectedElementChange={selectedElementChange}
                  elementsWithCount={dropdownElements}
                />
              </div>

              <div className="space-y-5">
                {elementsRendered?.length !== 0 ? (
                  <div className="space-y-5">{elementsRendered}</div>
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
        )}
      </PageFooterHeaderTemplate>
    </>
  );
};
