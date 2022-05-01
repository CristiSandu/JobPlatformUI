import {
  faUser,
  faClipboardList,
  faBars,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export type SideNavBarProps = { isUserAuthorized: boolean };

export const SideNavBar = ({
  isUserAuthorized,
}: SideNavBarProps): JSX.Element => {
  return (
    <div className="fixed top-0 bottom-0 z-20 bg-MainBlue w-20 pt-3 ">
      <div className="w-20 h-20 p-6 box-border">
        {isUserAuthorized ? (
          <NavLink end to={"/editUsers"}>
            <FontAwesomeIcon icon={faBars} className="h-10 w-10 text-white" />
          </NavLink>
        ) : (
          <FontAwesomeIcon icon={faBars} className="h-10 w-10 text-white" />
        )}
      </div>

      {/* <... className={`flex items-center space-x-2 px-4 py-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-l-4 border-white ${window.location.pathname === '/' ? 'border-red-200' : ''}`}> */}

      <div className="w-full mt-2 space-y-4">
        {isUserAuthorized && (
          <>
            <NavLink
              end
              to={"/editUsers"}
              className={`h-16 flex items-center justify-center min-w-full border-b-0 border-solid border-t-0 border-l-4 border-r-0 ${
                window.location.pathname === "/editUsers"
                  ? "border-LightBlue"
                  : "border-MainBlue"
              }  box-border border-interaction bg-MainBlue`}
            >
              <FontAwesomeIcon
                icon={faUsersGear}
                className={`h-10 w-10  ${
                  window.location.pathname === "/editUsers"
                    ? "text-LightBlue"
                    : "text-white"
                }`}
              />
            </NavLink>

            <NavLink
              end
              to={"/checkOffers"}
              className={`h-16 flex items-center justify-center min-w-full border-b-0 border-solid border-t-0 border-l-4 border-r-0 ${
                window.location.pathname === "/checkOffers"
                  ? "border-LightBlue"
                  : "border-MainBlue"
              }  box-border border-interaction bg-MainBlue`}
            >
              <FontAwesomeIcon
                icon={faClipboardList}
                className={`h-10 w-10  ${
                  window.location.pathname === "/checkOffers"
                    ? "text-LightBlue"
                    : "text-white"
                }`}
              />
            </NavLink>

            <NavLink
              end
              to={"/profilePage"}
              className={`h-16 flex items-center justify-center min-w-full border-b-0 border-solid border-t-0 border-l-4 border-r-0 ${
                window.location.pathname === "/profilePage"
                  ? "border-LightBlue"
                  : "border-MainBlue"
              }  box-border border-interaction bg-MainBlue`}
            >
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className={`h-10 w-10  ${
                    window.location.pathname === "/profilePage"
                      ? "text-LightBlue"
                      : "text-white"
                  }`}
                />
              </div>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
