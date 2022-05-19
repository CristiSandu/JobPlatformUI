import { useState } from "react";
import { CandidateJobs, User } from "../api/ui-service-client";
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

  deleteUserCall?: (UID: string) => void;
}

export default function UserCardElement({
  userInfo,
  userInfoExt,
  buttonsType,
  deleteUserCall,
}: UserCardInterface) {
  const [userData, setUserData] = useState<User>(
    userInfo !== undefined
      ? userInfo
      : userInfoExt?.candidate !== undefined
      ? userInfoExt?.candidate
      : {}
  );
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
          status={userInfoExt?.status !== undefined ? userInfoExt.status : 1}
          buttonsType={buttonsType}
          isAdmin={false}
          jobInfo={null}
          deleteUserCall={deleteUserCall}
        />
      </div>
    </>
  );
}
