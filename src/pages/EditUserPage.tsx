import { useEffect, useState } from "react";
import DropdownElement from "../components/DropdownElement";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import UserCardElement from "../components/UserCardElement";
import { UserProfileData } from "./ProfileFormPage";
import {
  DomainModel,
  DropdownClient,
  User,
  UsersClient,
} from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";

export type UserCardParameter = {
  domain: string;
  email: string;
  gender: string;
  type: string;
  age: string;
  name: string;
};

export type ElementsListParams = {
  initialsElements: UserProfileData[];
};
export const EditUserPage = ({
  initialsElements,
}: ElementsListParams): JSX.Element => {
  const [elementsList, setElementsList] = useState<User[]>();
  const [initialUsersList, setInitialUsersList] = useState<User[]>();

  const [dropdownElements, setDropdownElements] = useState<DomainModel[]>();

  useEffect(() => {
    const dropdownsValues = new DropdownClient(
      process.env.REACT_APP_UI_SERVICE,
      AxiosHelpers.axiosClient
    );

    const usersValues = new UsersClient(
      process.env.REACT_APP_UI_SERVICE,
      AxiosHelpers.axiosClient
    );

    const fetchData = async () => {
      const elementDropdown = await dropdownsValues.domainsAll();
      const usersList = await usersValues.usersAll("All");

      setElementsList(usersList);
      setInitialUsersList(usersList);
      setDropdownElements(elementDropdown);
    };

    fetchData().catch(console.error);
  }, []);

  function selectedElementChange(element: string, dropdownName: string): void {
    if (element === "Domain") {
      setElementsList(initialsElements);
      return;
    }
    const elements = initialUsersList?.filter(
      (elem) => elem.domain === element
    );
    setElementsList(elements);
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
      domain={element.domain}
      email={element.email}
      gender={element.gender}
      name={element.name}
      type={element.type}
      age={element.age}
      description={element.description}
      description_last_job={element.description_last_job}
      last_level_grad={element.last_level_grad}
      location={element.location}
      phone={element.phone}
    />
  ));
  return (
    <>
      <PageFooterHeaderTemplate isAdmin={true}>
        <div className="pt-8 w-full">
          <div className="space-y-12 scroll">
            <span className="font-sans text-3xl font-semibold pb-12">
              Users
            </span>
            <div className="flex justify-between">
              <div className="grid grid-cols-3 gap-4">
                <button
                  className="btn-primary focus:bg-LightBlue"
                  onClick={() => onClickFilter("Candidate")}
                >
                  employee
                </button>
                <button
                  className="btn-primary focus:bg-LightBlue"
                  onClick={() => onClickFilter("Recruiter")}
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
                elements={dropdownElements}
              />
            </div>
            <div className="space-y-5">{elementsRendered}</div>
          </div>
        </div>
      </PageFooterHeaderTemplate>
    </>
  );
};
