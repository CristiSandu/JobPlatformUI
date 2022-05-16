import { useEffect, useState } from "react";
import DropdownElement from "../components/DropdownElement";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import JobCardElement from "../components/JobCardElement";
import { JobUserCardParameter } from "../components/JobUserCardElement";
import { DomainModel, DropdownClient } from "../api/ui-service-client";
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
  initialsElements: JobUserCardParameter[];
};

export const CheckOffersPage = ({
  initialsElements,
}: ElementsListParams): JSX.Element => {
  const [elementsList, setElementsList] =
    useState<JobUserCardParameter[]>(initialsElements);

  function selectedElementChange(element: string, dropdownName: string): void {
    if (element === "Domains") {
      setElementsList(initialsElements);
      return;
    }
    const elements = initialsElements.filter((elem) => elem.type === element);
    setElementsList(elements);
  }

  function onClickFilter(filterName: string): void {
    if (filterName === "All") {
      setElementsList(initialsElements);
      return;
    }
    const elements = initialsElements.filter(
      (elem) => elem.isValidate === (filterName === "true")
    );
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
      setDropdownElements(element);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  let elementsRendered = elementsList.map((element: JobUserCardParameter) => (
    <JobCardElement
      applicants={element.applicants}
      number_of_places={element.number_of_places}
      name={element.name}
      type={element.type}
      date={element.date}
      description={element.description}
      employer={element.employer}
      location={element.location}
      isValidate={element.isValidate}
    />
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
            <div className="space-y-5">{elementsRendered}</div>
          </div>
        </div>
      </PageFooterHeaderTemplate>
    </>
  );
};
