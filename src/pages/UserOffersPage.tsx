import { useEffect, useState } from "react";
import DropdownElement from "../components/DropdownElement";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import JobUserCardElement, {
  JobUserCardParameter,
} from "../components/JobUserCardElement";
import { useNavigate } from "react-router-dom";
import { DomainModel, DropdownClient } from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";

export type OffersListParams = {
  initialsElements: JobUserCardParameter[];
};

export const UserOffersPage = ({
  initialsElements,
}: OffersListParams): JSX.Element => {
  const [elementsList, setElementsList] =
    useState<JobUserCardParameter[]>(initialsElements);

  const [dropdownElements, setDropdownElements] = useState<DomainModel[]>();

  useEffect(() => {
    const dropdownsValues = new DropdownClient(
      process.env.REACT_APP_UI_SERVICE,
      AxiosHelpers.axiosClient
    );

    console.log("A intrat axios", AxiosHelpers.axiosClient);
    console.log("A intrat URL", process.env.REACT_APP_UI_SERVICE);

    console.log("A intrat ", dropdownsValues);

    const fetchData = async () => {
      console.log("in fecth data");

      const element = await dropdownsValues.domainsAll();
      setDropdownElements(element);
      console.log("rezultat", element);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  function selectedElementChange(element: string, dropdownName: string): void {
    if (element === "Domains") {
      setElementsList(initialsElements);
      return;
    }
    const elements = initialsElements.filter((elem) => elem.type === element);
    setElementsList(elements);
  }

  function onClickFilter(filterName: string): void {
    if (filterName === "My Offers") {
      const elements = initialsElements.filter(
        (elem) => elem.isMyOffer === true
      );
      setElementsList(elements);
      return;
    } else if (filterName === "true") {
      const elements = initialsElements.filter(
        (elem) => elem.applicants >= elem.number_of_places
      );
      setElementsList(elements);
    } else {
      const elements = initialsElements.filter(
        (elem) => elem.applicants < elem.number_of_places
      );
      setElementsList(elements);
    }
  }
  const navigate = useNavigate();

  let elementsRendered = elementsList.map((element: JobUserCardParameter) => (
    <JobUserCardElement
      applicants={element.applicants}
      number_of_places={element.number_of_places}
      isMyOffer={element.isMyOffer}
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
            <div className="space-y-5">{elementsRendered}</div>
          </div>
        </div>
      </PageFooterHeaderTemplate>
    </>
  );
};
