import { useEffect, useState } from "react";
import DropdownElement from "../components/DropdownElement";
import FormImage from "../Images/form_logo.svg";
import UserMImage from "../Images/userM_image.svg";
import UserFImage from "../Images/userF_image.svg";
import { PageFooterHeaderTeamplate } from "./PageFooterHeaderTeamplate";
import UserCardElement from "../components/UserCardElement";

export type UserCardParameter = {
  domain: string;
  email: string;
  gender: string;
  type: string;
  name: string;
};

export type ElementsListParams = {
  initialsElements: UserCardParameter[];
};
export const EditUserPage = ({
  initialsElements,
}: ElementsListParams): JSX.Element => {
  const [elementsList, setElementsList] =
    useState<UserCardParameter[]>(initialsElements);

  function selectedElementChange(element: string, dropdownName: string): void {
    const elements = initialsElements.filter((elem) => elem.domain === element);
    setElementsList(elements);
  }

  function onClickFilter(filterName: string): void {
    if (filterName === "All") {
      setElementsList(initialsElements);
      return;
    }
    const elements = initialsElements.filter(
      (elem) => elem.type === filterName
    );
    setElementsList(elements);
  }

  let elementsRendered = elementsList.map((element: UserCardParameter) => (
    <UserCardElement
      domain={element.domain}
      email={element.email}
      gender={element.gender}
      name={element.name}
    />
  ));
  return (
    <>
      <PageFooterHeaderTeamplate>
        <div className="pt-8 w-full">
          <div className="space-y-3 scroll">
            <span className="font-sans text-3xl font-semibold pb-12">
              Users
            </span>
            <div className="flex space-x-12">
              <div className="grid grid-cols-3 gap-4">
                <button
                  className="btn-primary focus:bg-LightBlue"
                  onClick={() => onClickFilter("employee")}
                >
                  employee
                </button>
                <button
                  className="btn-primary focus:bg-LightBlue"
                  onClick={() => onClickFilter("recruiters")}
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
                elements={["IT", "HoReCa", "Construction"]}
              />
            </div>
            {elementsRendered}
          </div>
        </div>
      </PageFooterHeaderTeamplate>
    </>
  );
};
