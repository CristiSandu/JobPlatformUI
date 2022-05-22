import { useEffect, useState } from "react";
import DropdownElement from "../components/DropdownElement";
import FormImage from "../Images/form_logo.svg";
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import ProfilePicture from "../components/ProfilePicture";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DomainModel,
  DropdownClient,
  User,
  UsersClient,
} from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";
import { isNullOrUndefined } from "../util/generic-helpers";
import { RoutesList, UserTypeConst } from "../util/constants";
import { auth, signOut } from "../provider/firebase";

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

  const [userData, setUserData] = useState<User>({});
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [isForUpdate, setIsForUpdate] = useState<boolean>(false);

  const [userEmail, setUserEmail] = useState<string>("");

  const [dropdownElements, setDropdownElements] = useState<DomainModel[]>();

  const location = useLocation();

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
      const element = await dropdownsValues.domainsAll();
      if (!isNullOrUndefined(location.state)) {
        setUserData(location.state as User);
        setIsForUpdate(true);
      } else {
        const uid = user?.uid;
        setUserEmail(user?.email ?? "");
        element.unshift({ name: "Domain" });

        setIsForUpdate(false);
        setUserData({ ...userData, email: userEmail });
        setUserData({ ...userData, documentId: uid });
      }
      setDropdownElements(element);
    };

    fetchData().catch(console.error);
  }, [user, loading]);

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
                    defaultValue={userData.name ?? ""}
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
                    defaultValue={userData.email ?? ""}
                    placeholder="Email"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 w-96">
                  <DropdownElement
                    selectedElementChange={selectedElementChange}
                    dropdownName="Domain"
                    preSelectedElement={userData.domain}
                    elements={dropdownElements}
                  />
                  <DropdownElement
                    selectedElementChange={selectedElementChange}
                    dropdownName="Type"
                    preSelectedElement={userData?.type}
                    elements={[
                      { name: "Type" },
                      { name: UserTypeConst.Recruiter },
                      { name: UserTypeConst.Candidate },
                    ]}
                  />
                </div>

                {selectedType === UserTypeConst.Recruiter ? (
                  <div className="space-y-4">
                    <div>
                      <input
                        className="entry-primary w-96"
                        type="tel"
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                        name="name"
                        defaultValue={userData.phone ?? ""}
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
                        defaultValue={userData.location ?? ""}
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
                        defaultValue={userData.description ?? ""}
                        placeholder="Company Description"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-96">
                      <DropdownElement
                        selectedElementChange={selectedElementChange}
                        preSelectedElement={userData.gender}
                        dropdownName="Gender"
                        elements={[
                          { name: "Gender" },
                          { name: "M" },
                          { name: "F" },
                          { name: "NaN" },
                        ]}
                      />

                      <input
                        className="entry-primary "
                        type="tel"
                        name="name"
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                        defaultValue={userData.phone ?? ""}
                        placeholder="Phone"
                      />

                      <input
                        className="entry-primary "
                        type="number"
                        name="name"
                        onChange={(e) =>
                          setUserData({ ...userData, age: +e.target.value })
                        }
                        defaultValue={userData.age ?? ""}
                        placeholder="Age"
                      />
                      <input
                        className="entry-primary "
                        type="text"
                        name="name"
                        onChange={(e) =>
                          setUserData({ ...userData, location: e.target.value })
                        }
                        defaultValue={userData.location ?? ""}
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
                        defaultValue={userData.last_level_grad ?? ""}
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
                        defaultValue={userData.description_last_job ?? ""}
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
                        defaultValue={userData.description ?? ""}
                        placeholder="Description"
                      />
                    </div>
                  </div>
                )}
              </form>
              <div className="grid grid-cols-3 gap-4 px-4 pt-8">
                <button
                  className="btn-primary"
                  onClick={async () => {
                    const uid = user?.uid;
                    const email = user?.email;
                    userData.email = email;
                    setUserData({ ...userData, email: email });
                    setUserData({ ...userData, documentId: uid });
                    if (!isForUpdate) {
                      const response = await usersValues.usersPOST({
                        userData: userData,
                      });
                      if (response) {
                        await signOut();
                        navigate(RoutesList.Login);
                      }
                    } else {
                      if (!isNullOrUndefined(uid)) {
                        const response = await usersValues.usersPUT(uid, {
                          userData: userData,
                        });
                        if (response) {
                          navigate(RoutesList.Back);
                        }
                      }
                    }
                  }}
                >
                  Save
                </button>
                <div />
                <button
                  className="btn-primary"
                  onClick={() => {
                    navigate(RoutesList.Back);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageFooterHeaderTemplate>
    </>
  );
};
