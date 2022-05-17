import ModalUserInfo from "./ModalUserInfo";
import JobPostLogo from "../Images/job_post_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { JobExtendedModel } from "../api/ui-service-client";
import dayjs from "dayjs";

export type JobCardParameter = {
  name: string;
  type: string;
  employer: string;
  date: string;
  description: string;
  location: string;
  isValidate: boolean;
};

export interface JobCardElementInterface {
  jobInfo: JobExtendedModel;
  checkAJobCall?: (jobId: string, value: boolean) => void;
}

export default function JobCardElement({
  jobInfo,
  checkAJobCall,
}: JobCardElementInterface) {
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

          {jobInfo.isCheck ? (
            <div className="flex rounded bg-WhiteBlue text-LightBlue px-2 py-1 text-center font-bold text-sm items-center h-max w-32">
              <div className="flex-1"> Checked</div>
              <FontAwesomeIcon
                icon={faCheck}
                className="h-5 w-8 flex-none font-bold text-GreenCheck"
              />
            </div>
          ) : (
            <div className="flex rounded bg-WhiteBlue text-LightBlue px-2 py-1 space-x-2 text-center font-bold text-sm items-end h-max w-32">
              <div className="flex-1 items-end"> To Check</div>
              <FontAwesomeIcon
                icon={faRectangleXmark}
                className="h-5 w-6 flex-none text-LightBlue"
              />
            </div>
          )}
        </div>
        <ModalUserInfo
          userInfo={null}
          isAdmin={true}
          jobInfo={jobInfo}
          checkAJobCall={checkAJobCall}
        />
      </div>
    </>
  );
}
