// JobPageExtended.tsx
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import { JobUserCardParameter } from "../components/JobUserCardElement";
import JobPostLogo from "../Images/job_post_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons";

import UserCardElement from "../components/UserCardElement";
import { ButtonsType, FromEnum, PassingDataTo } from "../util/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isNullOrUndefined } from "../util/generic-helpers";
import {
  CandidateJobs,
  JobsClient,
  RecruterJobs,
} from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";
import dayjs from "dayjs";
import NoDataImage from "../Images/no_data_logo.svg";
import NoDataComponent from "../components/NoDataComponent";

export type JobPageExtendedParams = {
  jobInfo: JobUserCardParameter;
};

export const JobPageExtended = ({
  jobInfo,
}: JobPageExtendedParams): JSX.Element => {
  const [isFromProfile, setIsFromProfile] = useState<FromEnum>();
  const [recruiterJobsList, setRecruiterJobsList] = useState<RecruterJobs>();

  const [isJobExpired, setIsJobExpired] = useState<boolean>(false);

  const location = useLocation();
  const navigator = useNavigate();

  const jobData = new JobsClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  async function expireHandler(jobId: string): Promise<boolean> {
    const response = await jobData.expireJob({
      isExpired: true,
      jobId: jobId,
    });

    return response;
  }

  async function deleteOffers(jobId: string): Promise<boolean> {
    const response = await jobData.jobsDELETE(jobId);

    return response;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!isNullOrUndefined(location.state)) {
        const dataFromNav: PassingDataTo = location.state as PassingDataTo;
        setIsFromProfile(dataFromNav.isFrom);

        if (dataFromNav.isFrom === FromEnum.FromMainJobs) {
          const recruiterList = await jobData.getRecruiterJobsById({
            angajatorID: dataFromNav.employerId,
            jobID: dataFromNav.jobId,
          });
          if (
            !isNullOrUndefined(recruiterList) &&
            !isNullOrUndefined(recruiterList[0])
          ) {
            setRecruiterJobsList(recruiterList[0]);
            if (recruiterList[0].job?.isExpired !== undefined) {
              setIsJobExpired(recruiterList[0].job?.isExpired);
            }
          }
        }
        if (dataFromNav.isFrom === FromEnum.FromUserProfile) {
          setRecruiterJobsList(dataFromNav.jobDetail);
          if (dataFromNav.jobDetail?.job?.isExpired !== undefined) {
            setIsJobExpired(dataFromNav.jobDetail?.job?.isExpired);
          }
        }
      }
    };

    fetchData().catch(console.error);
  }, []);

  let elementsRendered = recruiterJobsList?.candidateList?.map(
    (element: CandidateJobs) => (
      <UserCardElement
        userInfoExt={!isNullOrUndefined(element) ? element : {}}
        recruterId={
          !isNullOrUndefined(recruiterJobsList.angajatorID)
            ? recruiterJobsList.angajatorID
            : ""
        }
        jobId={
          !isNullOrUndefined(recruiterJobsList.jobId)
            ? recruiterJobsList.jobId
            : ""
        }
        buttonsType={ButtonsType.DefaultCancel}
      />
    )
  );
  return (
    <PageFooterHeaderTemplate isAdmin={false}>
      <div className="pt-8 w-full">
        <div className="space-y-8 scroll">
          <div className="grid grid-cols-4 gap-4">
            <button className="btn-primary bg-SecondBlue focus:bg-LightBlue">
              Update
            </button>
            <button
              className="btn-primary bg-SecondBlue focus:bg-LightBlue"
              onClick={async () => {
                if (
                  !isNullOrUndefined(recruiterJobsList?.jobId) &&
                  recruiterJobsList?.jobId !== undefined
                )
                  if (!(await expireHandler(recruiterJobsList?.jobId))) {
                    alert("Error! \nCan't expire this offer!");
                  } else {
                    if (recruiterJobsList.job?.isExpired !== undefined) {
                      setIsJobExpired(true);
                    }
                    alert("Success! \nThis job has expired");
                  }
              }}
            >
              Expired
            </button>
            <button
              className="btn-primary bg-RedDelete focus:bg-LightBlue"
              onClick={async () => {
                if (
                  !isNullOrUndefined(recruiterJobsList?.jobId) &&
                  recruiterJobsList?.jobId !== undefined
                ) {
                  if (!(await deleteOffers(recruiterJobsList?.jobId))) {
                    alert("Error! \nCan't delete this offer!");
                  } else {
                    alert("Success! \nThis job has been deleted successfully");
                  }
                }
              }}
            >
              Delete
            </button>
            <button
              className="btn-primary focus:bg-LightBlue"
              onClick={() => {
                if (isFromProfile === FromEnum.FromMainJobs) {
                  navigator("/profilePage1");
                } else {
                  navigator(-1);
                }
              }}
            >
              Back
            </button>
          </div>
          <div className="flex justify-between pt-5 pl-5 pb-2 pr-0 border-b border-solid border-slate-200 rounded-t">
            <img
              className="z-0"
              src={JobPostLogo}
              height="161"
              width="207"
              alt="React Logo"
            />
            <div className="space-y-2 justify-between">
              <div className="space-y-1">
                <div className="title-primary text-4xl font-semibold">
                  {recruiterJobsList?.job?.name}
                </div>
                <div className="title-primary text-base font-mono">
                  {recruiterJobsList?.job?.recruterName}
                </div>
                <div className="title-primary text-base font-mono">
                  Nr:{recruiterJobsList?.job?.numberEmp}
                </div>
              </div>

              <div className="flex space-x-12 items-center justify-between">
                <div className="content-center items-end">
                  <div className="text-sm font-mono">Date</div>
                  <div className="text-sm font-mono">
                    {dayjs(recruiterJobsList?.job?.date).format("DD.MM.YYYY")}
                  </div>
                </div>
                <div className="rounded bg-LightBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
                  {recruiterJobsList?.job?.domain}
                </div>
              </div>
              {isJobExpired && (
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faCalendarXmark}
                    className="h-6 w-6 absolute font-bold top-2 right-0 text-RedDelete"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="relative pr-6 pt-4 space-y-8 flex-auto">
            <div>
              <div className="font-semibold text-2xl font-mono">
                Job Description
              </div>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {recruiterJobsList?.job?.description}
              </p>
              <div className="font-semibold text-2xl font-mono">
                Location: {recruiterJobsList?.job?.address}
              </div>
            </div>
          </div>

          {elementsRendered?.length !== 0 ? (
            <div className="space-y-5">{elementsRendered}</div>
          ) : (
            <NoDataComponent
              imageName={NoDataImage}
              height={"top-1/2 py-12 left-1/3"}
              text="No user has applied yet"
            />
          )}
        </div>
      </div>
    </PageFooterHeaderTemplate>
  );
};
