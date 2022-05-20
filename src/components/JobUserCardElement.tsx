import ModalUserInfo from "./ModalUserInfo";
import JobPostLogo from "../Images/job_post_logo.svg";
import {
  CandidateJobsExtendedModel,
  Job,
  JobExtendedModel,
  RecruterJobs,
} from "../api/ui-service-client";
import { isNullOrUndefined } from "../util/generic-helpers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { ButtonsType, FromEnum } from "../util/constants";
import { useNavigate } from "react-router-dom";

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
  jobInfo?: JobExtendedModel;
  jobInfoExtended?: CandidateJobsExtendedModel;
  jobInfoRecruter?: RecruterJobs;
  buttonsType: ButtonsType;
}

export default function JobUserCardElement({
  jobInfo,
  jobInfoExtended,
  jobInfoRecruter,
  buttonsType,
}: JobUserCardElementInterface) {
  const [labelValue, setLabelValue] = useState<string>();
  const [colorLabel, setColorLabel] = useState<string>();

  const jobData: Job =
    jobInfoExtended?.jobDetails !== undefined
      ? jobInfoExtended?.jobDetails
      : jobInfoRecruter?.job !== undefined
      ? jobInfoRecruter?.job
      : {};

  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  useEffect(() => {
    if (!isNullOrUndefined(jobInfoExtended)) {
      switch (jobInfoExtended.status) {
        case 0: {
          setLabelValue("On hold");
          setColorLabel("text-YellowWaiting border-YellowWaiting");
          break;
        }
        case 1: {
          setLabelValue("Accepted");
          setColorLabel("text-GreenCheck border-GreenCheck");

          break;
        }
        case 2: {
          setLabelValue("Rejected");
          setColorLabel("text-RedDelete border-RedDelete");

          break;
        }
      }
    }
  }, [jobInfoExtended]);

  const navigate = useNavigate();

  return (
    <div
      className="grow px-4"
      onClick={() => {
        console.log(jobInfoRecruter);
        if (!isNullOrUndefined(jobInfoRecruter)) {
          navigate("/profilePage2", {
            state: {
              jobDetail: jobInfoRecruter,
              isFrom: FromEnum.FromUserProfile,
            },
          });
        }
      }}
    >
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
          <div className="title-primary text-MainBlue">
            {jobInfo?.name || jobData.name}
          </div>
          <div className="text-base font-semibold">
            {jobInfo?.recruterName || jobData.recruterName}
          </div>
          <div className="text-sm font-semibold">
            {jobInfo?.address || jobData.address}
          </div>
          <div className="text-sm font-semibold">
            {dayjs(jobInfo?.date?.toString()).format("DD.MM.YYYY") ||
              dayjs(jobData.date?.toString()).format("DD.MM.YYYY")}
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-2 items-center py-2 pr-6">
          <div className="flex-none rounded bg-LightBlue text-WhiteBlue px-4 py-1 text-center font-bold text-sm items-center h-max w-32">
            {jobInfo?.domain || jobData.domain}
          </div>

          {(!isNullOrUndefined(jobInfo?.isMine) && jobInfo?.isMine) ||
          (!isNullOrUndefined(jobInfo?.isApplied) && !jobInfo?.isApplied) ? (
            <div
              className="flex-none rounded bg-LightBlue text-GreenCheck border-GreenCheck border-2 px-4 py-1 text-center font-bold text-sm items-center h-max w-32"
              onClick={() => {}}
            >
              {jobInfo?.isMine ? "My Offer" : !jobInfo?.isApplied && "Apply"}
            </div>
          ) : !isNullOrUndefined(jobInfoExtended?.status) ? (
            <div
              className={`flex-none rounded bg-LightBlue ${colorLabel} border-2 px-4 py-1 text-center font-bold text-sm items-center h-max w-32`}
            >
              {labelValue}
            </div>
          ) : (
            <div />
          )}

          {!isNullOrUndefined(jobInfo) || !isNullOrUndefined(jobData) ? (
            <div
              className={`flex-none rounded bg-WhiteBlue  ${
                (!isNullOrUndefined(jobInfo) &&
                  !isNullOrUndefined(jobInfo?.numberEmp) &&
                  !isNullOrUndefined(jobInfo?.numberApplicants) &&
                  jobInfo?.numberApplicants >= jobInfo?.numberEmp) ||
                (!isNullOrUndefined(jobData) &&
                  !isNullOrUndefined(jobData.numberEmp) &&
                  !isNullOrUndefined(jobData.numberApplicants) &&
                  jobData.numberApplicants >= jobData.numberEmp)
                  ? "text-SecondBlue border-SecondBlue border-2"
                  : "text-LightBlue "
              }  px-4 py-1 text-center font-bold text-sm items-center h-max w-32`}
            >
              Nr: {jobInfo?.numberApplicants || jobData.numberApplicants || 0}/
              {jobInfo?.numberEmp || jobData.numberEmp}
            </div>
          ) : (
            <div
              className={`flex-none rounded bg-WhiteBlue  ${"text-SecondBlue border-SecondBlue border-2"}  px-4 py-1 text-center font-bold text-sm items-center h-max w-32`}
            >
              {!isNullOrUndefined(jobInfoExtended?.lastStatusDate) &&
                dayjs(jobInfoExtended?.lastStatusDate.toString()).format(
                  "DD.MM.YYYY"
                )}
            </div>
          )}
        </div>
        {!isNullOrUndefined(jobInfo) && (
          <ModalUserInfo
            userInfo={null}
            status={-1}
            jobInfo={jobInfo === undefined ? null : jobInfo}
            isAdmin={false}
            buttonsType={buttonsType}
          />
        )}
      </div>
    </div>
  );
}
