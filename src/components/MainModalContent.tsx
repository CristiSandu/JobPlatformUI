import { JobExtendedModel, User } from "../api/ui-service-client";
import ValidationSwitch from "./ValidationSwitch";

export interface MainModalContentInterface {
  jobInfo: JobExtendedModel | null;
  status: number;
  userInfo: User | null;
  isRecruiter: boolean;
  validationChange: (position: number) => void;
}

export default function MainModalContent({
  jobInfo,
  status,
  userInfo,
  isRecruiter,
  validationChange,
}: MainModalContentInterface) {
  return (
    <>
      {userInfo !== null ? (
        <div className="relative py-6 flex-auto">
          <div className="space-y-3 pb-4">
            <div className="-space-y-1">
              <p className="px-6 font-semibold text-xl font-mono">
                Last Level Graduate
              </p>
              <div className="px-6 text-4xl">{userInfo?.last_level_grad}</div>
            </div>
            <div className="-space-y-1 border-solid border-slate-200 ">
              <p className="px-6 font-semibold text-xl font-mono">Location</p>
              <div className="px-6 text-4xl">{userInfo?.location}</div>
            </div>
            <div className="-space-y-1 border-solid border-slate-200 ">
              <p className="px-6 font-semibold text-xl font-mono">
                Last job description
              </p>
              <div className="px-6 text-4xl">
                {userInfo?.description_last_job}
              </div>
            </div>
            <div className="-space-y-1 border-solid border-slate-200 ">
              <p className="px-6 font-semibold text-xl font-mono">
                Phone Number
              </p>
              <div className="px-6 text-4xl">{userInfo?.phone}</div>
            </div>
            <div className="-space-y-1 pb-4 border-solid border-slate-200 ">
              <p className="px-6 font-semibold text-xl font-mono">
                Description
              </p>
              <div className="px-6 text-4xl">{userInfo?.description}</div>
            </div>
          </div>
          {isRecruiter && (
            <div className="grid grid-cols-3">
              <div />
              <div />
              <div className="flex-col justify-between">
                <ValidationSwitch
                  status={status}
                  validationChange={validationChange}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative p-6 space-y-8 flex-auto">
          <div>
            <div className="font-semibold text-2xl font-mono">
              Job Description
            </div>
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {jobInfo?.description}
            </p>
            <div className="font-semibold text-2xl font-mono">
              Location: {jobInfo?.address}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
