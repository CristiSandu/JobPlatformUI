import dayjs from "dayjs";
import React from "react";
import { JobExtendedModel } from "../api/ui-service-client";

export interface UserInfoInModalInterface {
  jobInfo: JobExtendedModel | null;
}

export default function JobInfoInModal({ jobInfo }: UserInfoInModalInterface) {
  return (
    <div className="space-y-1">
      <div>
        <div className="title-primary text-4xl font-semibold">
          {jobInfo?.name}
        </div>
        <div className="title-primary text-base font-mono">
          {jobInfo?.recruterName}
        </div>
        <div className="title-primary text-base font-mono">
          Nr:{jobInfo?.numberApplicants}/{jobInfo?.numberEmp}
        </div>
      </div>

      <div className="flex space-x-12">
        <div className="content-center items-end">
          <div className="text-sm font-mono">Date</div>
          <div className="text-sm font-mono">
            {dayjs(jobInfo?.date?.toString()).format("DD.MM.YYYY")}
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="rounded bg-LightBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
            {jobInfo?.domain}
          </div>
        </div>
      </div>
    </div>
  );
}
