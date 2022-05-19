import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePicture from "../components/ProfilePicture";
import { UserPageParams } from "./ProfilePageTemplate";
import {
  faPencil,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { auth, signOut } from "../provider/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import {
  CandidateJobsExtendedModel,
  JobsClient,
  User,
  UsersClient,
} from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";
import { isNullOrUndefined } from "../util/generic-helpers";
import { LoadingSpinner } from "../components/LoadingSpinner";
import JobUserCardElement from "../components/JobUserCardElement";
import { ButtonsType } from "../util/constants";

export const ProfilePage = ({ userInfo }: UserPageParams): JSX.Element => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState<User>({});
  const [userJobs, setUserJobs] = useState<CandidateJobsExtendedModel[]>([]);
  const [initialUserJobs, setInitialUserJobs] = useState<
    CandidateJobsExtendedModel[]
  >([]);

  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const usersValues = new UsersClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  const candidateJobs = new JobsClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  useEffect(() => {}, []);

  function onClickFilter(filterName: string): void {
    if (filterName === "On Hold") {
      const elements = initialUserJobs?.filter((elem) => elem.status === 0);
      setUserJobs(elements);
      return;
    } else if (filterName === "Accepted") {
      const elements = initialUserJobs?.filter((elem) => elem.status === 1);
      setUserJobs(elements);
      return;
    } else if (filterName === "Rejected") {
      const elements = initialUserJobs?.filter((elem) => elem.status === 2);
      setUserJobs(elements);
      return;
    } else {
      setUserJobs(initialUserJobs);
      return;
    }
  }

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        localStorage.setItem("JWT", await user.getIdToken());
        setIsLoading(true);
        const usersList = await usersValues.usersAll(user.uid);

        setIsLoading(false);
        if (usersList.length === 1 && !isNullOrUndefined(usersList[0])) {
          if (usersList[0].type === "Candidate") {
            const jobsList = await candidateJobs.getCandidateJobs({
              userID: user.uid,
            });
            setUserJobs(jobsList);
            setInitialUserJobs(jobsList);
          }
          localStorage.setItem("JWT", await user.getIdToken());
          setUserDetails(usersList[0]);
        }
      };

      fetchData().catch(console.error);
    }
  }, [user, loading, error, navigate]);

  const jobCards = userJobs.map((element: CandidateJobsExtendedModel) => (
    <JobUserCardElement
      jobInfoExtended={element}
      buttonsType={ButtonsType.DefaultCancel}
    />
  ));

  return (
    <div className="pt-8 h-screen">
      <div className="space-y-12 grid place-items-center">
        <span className="font-sans text-3xl font-semibold pb-12">
          {userDetails.isAdmin ? "My Admin Profile" : "My Profile"}
        </span>

        {isLoading ? (
          <div className="grid place-items-center h-64 w-64">
            <LoadingSpinner />
          </div>
        ) : (
          <ProfilePicture
            height="262"
            width="262"
            isMasculine={userDetails.gender !== "F"}
          />
        )}

        <div className="items-center space-y-8">
          <div className="grow self-center space-y-1 items-center grid place-items-center">
            <div className="title-primary text-2xl">{userDetails.name}</div>
            <div className="text-sm">{userDetails.email}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex content-center items-end">
              <div className="text-3xl font-semibold">{userDetails?.age}</div>
              <div className="text-sm font-mono">
                {!isNullOrUndefined(userDetails?.age) && "Years"}
              </div>
            </div>
            <div className="flex-none rounded bg-LightBlue text-WhiteBlue px-4 py-1 text-center font-bold text-sm items-center h-8 w-max">
              {userDetails.domain}
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div>Last Level Graduate</div>
              <div className="text-xl">{userDetails.last_level_grad}</div>
            </div>
            <div>
              <div>Description</div>
              <div className="text-xl w-96">{userDetails.description}</div>
            </div>
            <div>
              <div>Last Job Description</div>
              <div className="text-xl">{userDetails.description_last_job}</div>
            </div>
          </div>
          {initialUserJobs.length !== 0 && (
            <div className="flex justify-center space-x-8">
              <button
                className="btn-primary focus:bg-LightBlue"
                onClick={() => {
                  onClickFilter("On Hold");
                }}
              >
                On Hold
              </button>
              <button
                className="btn-primary focus:bg-LightBlue"
                onClick={() => {
                  onClickFilter("Accepted");
                }}
              >
                Accepted
              </button>
              <button
                className="btn-primary focus:bg-LightBlue"
                onClick={() => {
                  onClickFilter("Rejected");
                }}
              >
                Rejected
              </button>
              <button
                className="btn-primary focus:bg-LightBlue"
                onClick={() => {
                  onClickFilter("All");
                }}
              >
                All
              </button>
            </div>
          )}
          <div className="flex justify-between">{jobCards}</div>
          <div className="flex justify-between">
            <button
              className="btn-primary space-x-4 flex  items-center bg-SecondBlue  text-WhiteBlue focus:bg-LightBlue"
              onClick={() => {
                navigate("/profileForm", { state: userDetails });
              }}
            >
              <div className="flex-1">Edit</div>
              <FontAwesomeIcon
                icon={faPencil}
                className="h-5 w-6 flex-none font-bold text-WhiteBlue"
              />
            </button>
            <button
              className="btn-primary space-x-4 flex  items-center bg-SecondBlue  text-WhiteBlue focus:bg-LightBlue"
              onClick={async () => {
                await signOut();
                navigate("/");
              }}
            >
              <div className="flex-1">Log Out</div>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="h-5 w-6 flex-none font-bold text-WhiteBlue"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
