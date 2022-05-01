import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePicture from "../components/ProfilePicture";
import { UserPageParams } from "./ProfilePageTemplate";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export const ProfilePage = ({ userInfo }: UserPageParams): JSX.Element => {
  return (
    <div className="pt-8 h-screen">
      <div className="space-y-12 grid place-items-center">
        <span className="font-sans text-3xl font-semibold pb-12">
          My Admin Profile
        </span>

        <ProfilePicture
          height="262"
          width="262"
          isMasculine={userInfo.gender !== "F"}
        />

        <div className="items-center space-y-8">
          <div className="grow self-center space-y-1 items-center grid place-items-center">
            <div className="title-primary text-2xl">{userInfo.name}</div>
            <div className="text-sm">{userInfo.email}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex content-center items-end">
              <div className="text-3xl font-semibold">{userInfo?.age}</div>
              <div className="text-sm font-mono">Years</div>
            </div>
            <div className="flex-none rounded bg-LightBlue text-WhiteBlue px-4 py-1 text-center font-bold text-sm items-center h-8 w-max">
              {userInfo.domain}
            </div>
          </div>
          <div>
            <div>Last Level Graduate</div>
            <div className="text-xl">Universitatea Politehnica Bucuresti</div>
          </div>
          <div className="grid place-items-end ">
            <button className="btn-primary space-x-4 flex  items-center bg-SecondBlue  text-WhiteBlue focus:bg-LightBlue">
              <div className="flex-1">Edit</div>
              <FontAwesomeIcon
                icon={faPencil}
                className="h-5 w-6 flex-none font-bold text-WhiteBlue"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
