import ModalUserInfo from "./ModalUserInfo";
import JobPostLogo from "../Images/job_post_logo.svg";
import { JobExtendedModel } from "../api/ui-service-client";
import { isNullOrUndefined } from "../util/generic-helpers";
import dayjs from "dayjs";

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
export interface JobUserCardElementInterface {
  jobInfo: JobExtendedModel;
}

export default function JobUserCardElement({
  jobInfo,
}: JobUserCardElementInterface) {
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
          <div className="text-base font-semibold">{jobInfo.recruterName}</div>
          <div className="text-sm font-semibold">{jobInfo.address}</div>
          <div className="text-sm font-semibold">
            {dayjs(jobInfo.date?.toString()).format("DD.MM.YYYY")}
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-2 items-center py-2 pr-6">
          <div className="flex-none rounded bg-LightBlue text-WhiteBlue px-4 py-1 text-center font-bold text-sm items-center h-max w-32">
            {jobInfo.domain}
          </div>

          {jobInfo.isMine ? (
            <div className="flex-none rounded bg-LightBlue text-GreenCheck border-GreenCheck border-2 px-4 py-1 text-center font-bold text-sm items-center h-max w-32">
              My Offer
            </div>
          ) : (
            <div />
          )}

          <div
            className={`flex-none rounded bg-WhiteBlue  ${
              !isNullOrUndefined(jobInfo?.numberApplicants) &&
              !isNullOrUndefined(jobInfo?.numberEmp) &&
              jobInfo?.numberApplicants >= jobInfo?.numberEmp
                ? "text-SecondBlue border-SecondBlue border-2"
                : "text-LightBlue "
            }  px-4 py-1 text-center font-bold text-sm items-center h-max w-32`}
          >
            Nr: {jobInfo.numberApplicants}/{jobInfo.numberEmp}
          </div>
        </div>
        <ModalUserInfo userInfo={null} isAdmin={false} jobInfo={jobInfo} />
      </div>
    </>
  );
}
