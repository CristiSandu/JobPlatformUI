import { userInfo } from "os";
import { User } from "../api/ui-service-client";
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
  userInfo: User;
  deleteUserCall?: (UID: string) => void;
}

export default function UserCardElement({
  userInfo,
  deleteUserCall,
}: UserCardInterface) {
  return (
    <>
      <div
        className="flex static rounded-md bg-CardGray px-4 py-2 space-x-5 shadow-md hover:cursor-pointer"
        onClick={() => {}}
      >
        <ProfilePicture
          height="80"
          width="80"
          isMasculine={userInfo.gender !== "F"}
        />
        <div className="grow self-center space-y-1 items-center">
          <div className="title-primary">{userInfo.name}</div>
          <div className="text-sm">{userInfo.email}</div>
        </div>
        <div className="grid grid-cols-1 items-center">
          <div className="flex-none rounded bg-LightBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
            {userInfo.domain}
          </div>
        </div>
        <ModalUserInfo
          userInfo={userInfo}
          isAdmin={false}
          jobInfo={null}
          deleteUserCall={deleteUserCall}
        />
      </div>
    </>
  );
}
