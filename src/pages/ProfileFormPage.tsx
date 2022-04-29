import { useState } from "react";
import DropdownElement from "../components/DropdownElement";
import FormImage from "../Images/form_logo.svg";
import UserMImage from "../Images/userM_image.svg";
import UserFImage from "../Images/userF_image.svg";
import { PageFooterHeaderTeamplate } from "./PageFooterHeaderTeamplate";

export const ProfileFormPage = (): JSX.Element => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");

  function selectedElementChange(element: string, dropdownName: string): void {
    switch (dropdownName) {
      case "Domain":
        break;
      case "Type":
        setSelectedType(element);
        break;
      case "Gender":
        setSelectedGender(element);
        break;
    }
  }

  return (
    <>
      <PageFooterHeaderTeamplate>
        <div className="flex h-screen w-screen">
          <img
            className="absolute top-40 left-40 z-0 "
            src={FormImage}
            height="244"
            width="410"
            alt="React Logo"
          />
          <div className="absolute top-1/3 left-3/4">
            {selectedGender === "F" ? (
              <img
                className="z-0"
                src={UserFImage}
                height="306"
                width="306"
                alt="React Logo"
              />
            ) : (
              <img
                className="z-0"
                src={UserMImage}
                height="306"
                width="306"
                alt="React Logo"
              />
            )}
          </div>

          <div className="space-y-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 w-max">
            <div className="space-y-3 ">
              <form className="space-y-4 align-baseline w-full">
                <div>
                  <input
                    className="entry-primary w-96"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    className="entry-primary w-96"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 w-96">
                  <DropdownElement
                    selectedElementChange={selectedElementChange}
                    dropdownName="Domain"
                    elements={["IT", "Construction", "HoReCa"]}
                  />
                  <DropdownElement
                    selectedElementChange={selectedElementChange}
                    dropdownName="Type"
                    elements={["Recruiter", "Candidate"]}
                  />
                </div>

                {selectedType === "Recruiter" ? (
                  <div className="space-y-4">
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="tel"
                        name="name"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="text"
                        name="name"
                        placeholder="Location"
                      />
                    </div>
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="text"
                        name="name"
                        placeholder="Company Description"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-96">
                      <DropdownElement
                        selectedElementChange={selectedElementChange}
                        dropdownName="Gender"
                        elements={["M", "F", "NaN"]}
                      />

                      <input
                        className="entry-primary "
                        type="tel"
                        name="name"
                        placeholder="Phone"
                      />

                      <input
                        className="entry-primary "
                        type="number"
                        name="name"
                        placeholder="Age"
                      />
                      <input
                        className="entry-primary "
                        type="text"
                        name="name"
                        placeholder="Location"
                      />
                    </div>
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="text"
                        name="name"
                        placeholder="Last level graduate"
                      />
                    </div>
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="text"
                        name="name"
                        placeholder="Last job description"
                      />
                    </div>
                    <div>
                      <textarea
                        className="entry-primary w-96 "
                        name="name"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                )}
              </form>
              <div className="grid grid-cols-3 gap-4 px-4 pt-8">
                <button className="btn-primary">Save</button>
                <div />
                <button className="btn-primary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </PageFooterHeaderTeamplate>
    </>
  );
};
