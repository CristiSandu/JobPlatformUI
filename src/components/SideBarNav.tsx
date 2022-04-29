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
    <div className="fixed top-0 bottom-0 z-20 bg-MainBlue w-20 pt-3">
      <div className="w-20 h-20 p-6 box-border">
        {isUserAuthorized ? (
          <NavLink end to={"/"}>
            <FontAwesomeIcon icon={faBars} className="h-10 w-10 text-white" />
          </NavLink>
        ) : (
          <FontAwesomeIcon icon={faBars} className="h-10 w-10 text-white" />
        )}
      </div>

      <div className="w-full mt-2">
        {isUserAuthorized && (
          <>
            <NavLink
              end
              to={"/"}
              className="h-16 flex items-center justify-center min-w-full border-b-0 border-solid border-t-0 border-l-4 border-r-0 border-LightBlue box-border border-interaction bg-MainBlue"
            >
              <FontAwesomeIcon
                icon={faUsersGear}
                className="h-10 w-10 text-LightBlue"
              />
            </NavLink>

            <NavLink
              end
              to={"/register"}
              className="h-16 flex items-center justify-center min-w-full border-b-0 border-solid border-t-0 border-l-4 border-r-0 border-MainBlue box-border border-interaction bg-MainBlue"
            >
              <FontAwesomeIcon
                icon={faClipboardList}
                className="h-10 w-10 text-white"
              />
            </NavLink>

            <NavLink
              end
              to={"/"}
              className="h-16 flex items-center justify-center min-w-full border-b-0 border-solid border-t-0 border-l-4 border-r-0 border-MainBlue "
            >
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="h-10 w-10 text-white"
                />
              </div>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
