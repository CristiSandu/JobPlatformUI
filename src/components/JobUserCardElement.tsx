import ModalUserInfo from "./ModalUserInfo";
import JobPostLogo from "../Images/job_post_logo.svg";

export type JobUserCardParameter = {
  name: string;
  type: string;
  employer: string;
  date: string;
  description: string;
  location: string;
  isValidate: boolean;
  number_of_places: number;
  applicants: number;
  isMyOffer?: boolean;
};

export default function JobUserCardElement(jobInfo: JobUserCardParameter) {
  return (
    <>
      <div
        className="flex static rounded-md bg-CardGray px-4 py-2 space-x-5 shadow-md hover:cursor-pointer"
        onClick={() => console.log("taeaeradfd")}
      >
        <img
          className="z-0"
          src={JobPostLogo}
          height="53"
          width="71"
          alt="React Logo"
        />

        <div className="grow self-center space-y-0 items-center">
          <div className="title-primary text-MainBlue">{jobInfo.name}</div>
          <div className="text-base font-semibold">{jobInfo.employer}</div>
          <div className="text-sm font-semibold">{jobInfo.location}</div>
          <div className="text-sm font-semibold">{jobInfo.date}</div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-2 items-center py-2 pr-6">
          <div className="flex-none rounded bg-LightBlue text-WhiteBlue px-4 py-1 text-center font-bold text-sm items-center h-max w-32">
            {jobInfo.type}
          </div>

          {jobInfo.isMyOffer && (
            <div className="flex-none rounded bg-LightBlue text-GreenCheck border-GreenCheck border-2 px-4 py-1 text-center font-bold text-sm items-center h-max w-32">
              My Offer
            </div>
          )}

          <div
            className={`flex-none rounded bg-WhiteBlue  ${
              jobInfo.applicants >= jobInfo.number_of_places
                ? "text-SecondBlue border-SecondBlue border-2"
                : "text-LightBlue "
            }  px-4 py-1 text-center font-bold text-sm items-center h-max w-32`}
          >
            Nr: {jobInfo.applicants}/{jobInfo.number_of_places}
          </div>
        </div>
        <ModalUserInfo userInfo={null} isAdmin={false} jobInfo={jobInfo} />
      </div>
    </>
  );
}
