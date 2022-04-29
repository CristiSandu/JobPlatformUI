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
            <FontAwesomeIcon icon="users-gear" className="bg-white" />
          </NavLink>
        ) : (
          <FontAwesomeIcon icon="users-gear" className="bg-white" />
        )}
      </div>

      <div className="w-full mt-2">
        {isUserAuthorized && (
          <>
            <NavLink
              end
              to={"/"}
              className="h-16 flex items-center justify-center min-w-full border-b-0 border-solid border-t-0 border-l-4 border-r-0 border-MainBlue box-border border-interaction bg-red-50"
            >
              <div className="w-8 h-8">
                <FontAwesomeIcon icon="users-gear" />
              </div>
            </NavLink>

            <NavLink
              end
              to={"/register"}
              className="h-16 flex items-center justify-center min-w-full border-b-0 border-solid border-t-0 border-l-4 border-r-0 border-MainBlue box-border border-interaction bg-LightBlue"
            >
              <div className="w-8 h-8">
                <FontAwesomeIcon icon="check-square" className="bg-white" />
              </div>
            </NavLink>

            <NavLink
              end
              to={"/"}
              className="h-16 flex items-center justify-center min-w-full border-b-0 border-solid border-t-0 border-l-4 border-r-0 border-MainBlue "
            >
              <div className="relative">
                <div className="w-8 h-8">
                  <FontAwesomeIcon icon="check-square" className="bg-white" />
                </div>
              </div>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
