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

export default function UserCardElement(userinfo: UserCardParameter) {
  return (
    <>
      <div
        className="flex static rounded-md bg-CardGray px-4 py-2 space-x-5 shadow-md hover:cursor-pointer"
        onClick={() => console.log("taeaeradfd")}
      >
        <ProfilePicture
          height="80"
          width="80"
          isMasculine={userinfo.gender !== "F"}
        />
        <div className="grow self-center space-y-1 items-center">
          <div className="title-primary">{userinfo.name}</div>
          <div className="text-sm">{userinfo.email}</div>
        </div>
        <div className="grid grid-cols-1 items-center">
          <div className="flex-none rounded bg-LightBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
            {userinfo.domain}
          </div>
        </div>
        <ModalUserInfo userInfo={userinfo} isAdmin={false} jobInfo={null} />
      </div>
    </>
  );
}
