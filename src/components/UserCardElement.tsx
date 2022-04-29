import UserMImage from "../Images/userM_image.svg";
import UserFImage from "../Images/userF_image.svg";

export type UserCardParameter = {
  gender: string;
  name: string;
  email: string;
  domain: string;
};

export default function UserCardElement({
  gender,
  name,
  email,
  domain,
}: UserCardParameter) {
  return (
    <div
      className="flex rounded-md bg-CardGray px-4 py-2 space-x-5 shadow-md hover:cursor-pointer"
      onClick={() => console.log("taeaeradfd")}
    >
      {gender === "F" ? (
        <img
          className="z-0"
          src={UserFImage}
          height="80"
          width="80"
          alt="React Logo"
        />
      ) : (
        <img
          className="z-0"
          src={UserMImage}
          height="80"
          width="80"
          alt="React Logo"
        />
      )}
      <div className="grow self-center space-y-1 items-center">
        <div className="font-bold text-xl">{name}</div>
        <div className="text-sm">{email}</div>
      </div>
      <div className="grid grid-cols-1 items-center">
        <div className="flex-none rounded bg-LightBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
          {domain}
        </div>
      </div>
    </div>
  );
}
