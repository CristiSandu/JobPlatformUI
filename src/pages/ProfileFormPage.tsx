import { useState } from "react";
import DropdownElement from "../components/DropdownElement";
import FormImage from "../Images/form_logo.svg";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import ProfilePicture from "../components/ProfilePicture";
import { auth, updateUserInfo } from "../provider/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export type UserProfileData = {
  email: string;
  name: string;
  domain: string;
  type: string;
  gender: string | null;
  age: number | null;
  location: string;
  phone: string;
  last_level_grad: string | null;
  description: string;
  description_last_job: string | null;
};

export const ProfileFormPage = (): JSX.Element => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");

  const [userData, setUserData] = useState({});
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  function selectedElementChange(element: string, dropdownName: string): void {
    switch (dropdownName) {
      case "Domain":
        setUserData({ ...userData, domain: element });
        break;
      case "Type":
        setUserData({ ...userData, type: element });
        setSelectedType(element);
        break;
      case "Gender":
        setUserData({ ...userData, gender: element });
        setSelectedGender(element);
        break;
    }
  }

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
          <div className="absolute top-1/3 left-3/4">
            <ProfilePicture
              height="306"
              width="306"
              isMasculine={selectedGender !== "F"}
            />
          </div>

          <div className="space-y-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 w-max">
            <div className="space-y-3 ">
              <form className="space-y-4 align-baseline w-full">
                <div>
                  <input
                    className="entry-primary w-96"
                    type="text"
                    name="name"
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    className="entry-primary w-96"
                    type="text"
                    name="email"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
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
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                        name="name"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="text"
                        onChange={(e) =>
                          setUserData({ ...userData, location: e.target.value })
                        }
                        name="name"
                        placeholder="Location"
                      />
                    </div>
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="text"
                        name="name"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            description: e.target.value,
                          })
                        }
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
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                        placeholder="Phone"
                      />

                      <input
                        className="entry-primary "
                        type="number"
                        name="name"
                        onChange={(e) =>
                          setUserData({ ...userData, age: +e.target.value })
                        }
                        placeholder="Age"
                      />
                      <input
                        className="entry-primary "
                        type="text"
                        name="name"
                        onChange={(e) =>
                          setUserData({ ...userData, location: e.target.value })
                        }
                        placeholder="Location"
                      />
                    </div>
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="text"
                        name="name"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            last_level_grad: e.target.value,
                          })
                        }
                        placeholder="Last level graduate"
                      />
                    </div>
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="text"
                        name="name"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            description_last_job: e.target.value,
                          })
                        }
                        placeholder="Last job description"
                      />
                    </div>
                    <div>
                      <textarea
                        className="entry-primary w-96 "
                        name="name"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            description: e.target.value,
                          })
                        }
                        placeholder="Description"
                      />
                    </div>
                  </div>
                )}
              </form>
              <div className="grid grid-cols-3 gap-4 px-4 pt-8">
                <button
                  className="btn-primary"
                  onClick={() => {
                    updateUserInfo(user, userData);
                    navigate("/editUsers");
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
