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
        <div className="relative p-6 flex-auto">
          <div className="space-y-4">
            <div className="font-semibold text-xl font-mono">
              Last Level Graduate
            </div>
            <div className="text-4xl">{userInfo?.last_level_grad}</div>
            <div className="text-4xl">Location : {userInfo?.location}</div>
            <div className="text-4xl">
              Last job description: {userInfo?.description_last_job}
            </div>
            <div className="text-4xl">Phone Number: {userInfo?.phone}</div>
            <div className="text-4xl">Description: {userInfo?.description}</div>
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
