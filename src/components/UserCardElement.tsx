import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CandidateJobs, JobsClient, User } from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";
import { ButtonsType } from "../util/constants";
import ModalUserInfo from "./ModalUserInfo";
import ProfilePicture from "./ProfilePicture";

export type UserCardParameter = {
  gender: string;
  name: string;
  type: string;
  email: string;
  age: string;
  domain: string;
};
export interface UserCardInterface {
  userInfo?: User;
  userInfoExt?: CandidateJobs;
  buttonsType: ButtonsType;
  recruterId?: string;
  jobId?: string;
  deleteUserCall?: (UID: string) => void;
}

export default function UserCardElement({
  userInfo,
  userInfoExt,
  buttonsType,
  recruterId,
  jobId,
  deleteUserCall,
}: UserCardInterface) {
  const [userData, setUserData] = useState<User>(
    userInfo !== undefined
      ? userInfo
      : userInfoExt?.candidate !== undefined
      ? userInfoExt?.candidate
      : {}
  );

  const jobInstance = new JobsClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  function validationChange(position: number): void {
    const fetchData = async () => {
      if (
        userInfoExt !== undefined &&
        recruterId !== undefined &&
        jobId !== undefined
      ) {
        const respos: boolean = await jobInstance.jobStatus({
          angajatorId: recruterId,
          candidateId: userInfoExt.candidateID,
          jobId: jobId,
          jobStatus: position,
        });

        if (!respos) {
          alert("Error! \nCan't change status right now!");
        } else {
          alert("Success! \nStatus changed!");
        }
      }
    };

    fetchData().catch(console.error);
  }
  return (
    <>
      <div
        className="flex static rounded-md bg-CardGray px-4 py-2 space-x-5 shadow-md hover:cursor-pointer"
        onClick={() => {}}
      >
        <ProfilePicture
          height="80"
          width="80"
          isMasculine={userData.gender !== "F"}
        />
        <div className="grow self-center space-y-1 items-center">
          <div className="title-primary">{userData.name}</div>
          <div className="text-sm">{userData.email}</div>
        </div>
        <div className="grid grid-cols-1 items-center">
          <div className="flex-none rounded bg-LightBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
            {userData.domain}
          </div>
        </div>
        <ModalUserInfo
          userInfo={userData}
          status={userInfoExt?.status !== undefined ? userInfoExt.status : 0}
          buttonsType={buttonsType}
          validationChange={validationChange}
          isAdmin={false}
          jobInfo={null}
          deleteUserCall={deleteUserCall}
        />
      </div>
    </>
  );
}
