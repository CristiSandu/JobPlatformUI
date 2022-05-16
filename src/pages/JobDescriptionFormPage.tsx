import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DomainModel, DropdownClient } from "../api/ui-service-client";
import DropdownElement from "../components/DropdownElement";
import { JobUserCardParameter } from "../components/JobUserCardElement";
import FormImage from "../Images/form_logo.svg";
import { AxiosHelpers } from "../util/axios-helper";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";

type BaseJobDescription = {
  initialJobData: JobUserCardParameter;
};

export const JobDescriptionFormPage = ({
  initialJobData,
}: BaseJobDescription): JSX.Element => {
  const [jobData, setJobData] = useState<JobUserCardParameter>(initialJobData);

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

    fetchData().catch(console.error);
  }, []);

  function selectedElementChange(element: string, dropdownName: string): void {
    switch (dropdownName) {
      case "Domain":
        setJobData({ ...jobData, type: element });
        break;
    }
  }

  const navigate = useNavigate();

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
                    placeholder="Full Job Name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 w-96">
                  <DropdownElement
                    selectedElementChange={selectedElementChange}
                    dropdownName="Domain"
                    elements={dropdownElements}
                  />
                  <input
                    className="entry-primary "
                    type="number"
                    name="name"
                    onChange={(e) =>
                      setJobData({
                        ...jobData,
                        number_of_places: +e.target.value,
                      })
                    }
                    placeholder="Number"
                  />
                </div>
                <div>
                  <textarea
                    className="entry-primary w-96 "
                    name="name"
                    onChange={(e) =>
                      setJobData({
                        ...jobData,
                        description: e.target.value,
                      })
                    }
                    placeholder="Description"
                  />
                </div>
                <div>
                  <input
                    className="entry-primary w-96"
                    type="text"
                    onChange={(e) =>
                      setJobData({ ...jobData, location: e.target.value })
                    }
                    name="name"
                    placeholder="Location"
                  />
                </div>
              </form>
              <div className="flex justify-between">
                <div className="text-xl">{initialJobData.employer}</div>
                <div className="text-xl">{initialJobData.date}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 px-4 pt-8">
                <button
                  className="btn-primary"
                  onClick={() => {
                    console.log(jobData);
                    navigate(-1);
                  }}
                >
                  Save
                </button>
                <div />
                <button className="btn-primary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </PageFooterHeaderTemplate>
    </>
  );
};
