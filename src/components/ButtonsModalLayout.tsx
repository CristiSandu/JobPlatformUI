import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobExtendedModel, JobsClient, User } from "../api/ui-service-client";
import { AxiosHelpers } from "../util/axios-helper";
import { ButtonsType, FromEnum, RoutesList } from "../util/constants";
import { isNullOrUndefined } from "../util/generic-helpers";

export interface ButtonsModalLayoutInterface {
  userInfo: User | null;
  jobInfo: JobExtendedModel | null;
  buttonsType: ButtonsType;
  checkAJobCall?: (jobId: string, value: boolean) => void;
  closeModalCall: (isOpen: boolean) => void;
  deleteUserCall?: (UID: string) => void;
  expireHandler?: () => void;
  deleteOffers?: () => void;
}

export default function ButtonsModalLayout({
  userInfo,
  jobInfo,
  buttonsType,
  checkAJobCall,
  closeModalCall,
  expireHandler,
  deleteOffers,
  deleteUserCall,
}: ButtonsModalLayoutInterface) {
  const navigate = useNavigate();
  const [buttonRow, setButtonRow] = useState<JSX.Element>();

  const jobData = new JobsClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  useEffect(() => {
    switch (buttonsType) {
      case ButtonsType.AdminUserButtons:
        setButtonRow(
          <>
            <button
              className="btn-primary bg-RedDelete"
              type="button"
              onClick={() => {
                if (deleteUserCall !== undefined)
                  deleteUserCall(userInfo?.documentId ?? "");
                closeModalCall(false);
              }}
            >
              Delete
            </button>
            <button
              className="btn-primary"
              type="button"
              onClick={() => {
                closeModalCall(false);
              }}
            >
              Cancel
            </button>
          </>
        );
        break;
      case ButtonsType.AdminJobButtons:
        setButtonRow(
          <>
            <button
              className="btn-primary bg-GreenCheck"
              type="button"
              onClick={() => {
                if (checkAJobCall !== undefined)
                  checkAJobCall(jobInfo?.docID ?? "", true);
                closeModalCall(false);
              }}
            >
              Check
            </button>
            <button
              className="btn-primary bg-RedDelete"
              type="button"
              onClick={() => closeModalCall(false)}
            >
              Delete
            </button>
            <button
              className="btn-primary"
              type="button"
              onClick={() => closeModalCall(false)}
            >
              Cancel
            </button>
          </>
        );
        break;
      case ButtonsType.RecruiterJobButtons:
        setButtonRow(
          <>
            <button
              className="btn-primary bg-SecondBlue"
              type="button"
              onClick={() => {
                closeModalCall(false);
                navigate(RoutesList.JobPageExtended, {
                  state: {
                    jobId: jobInfo?.docID,
                    employerId: jobInfo?.recruterID,
                    isFrom: FromEnum.FromMainJobs,
                  },
                });
              }}
            >
              Extended Page
            </button>
            <button
              className="btn-primary bg-SecondBlue"
              type="button"
              onClick={() => {
                if (!isNullOrUndefined(expireHandler)) {
                  expireHandler();
                  closeModalCall(false);
                }
              }}
            >
              Expired
            </button>
            <button
              className="btn-primary bg-RedDelete"
              type="button"
              onClick={() => {
                if (!isNullOrUndefined(deleteOffers)) {
                  deleteOffers();
                  closeModalCall(false);
                }
              }}
            >
              Delete
            </button>
            <button
              className="btn-primary"
              type="button"
              onClick={() => closeModalCall(false)}
            >
              Cancel
            </button>
          </>
        );
        break;
      case ButtonsType.DefaultCancel:
        setButtonRow(
          <>
            <button
              className="btn-primary"
              type="button"
              onClick={() => closeModalCall(false)}
            >
              Cancel
            </button>
          </>
        );
        break;
      case ButtonsType.UserJobApplyButton:
        setButtonRow(
          <>
            <button
              className="btn-primary bg-SecondBlue"
              type="button"
              onClick={async () => {
                const response = await jobData.applyToAJob({
                  recruiterId: jobInfo?.recruterID,
                  jobId: jobInfo?.docID,
                });

                if (response) {
                  closeModalCall(false);
                }
              }}
            >
              Apply
            </button>
            <button
              className="btn-primary"
              type="button"
              onClick={() => {
                closeModalCall(false);
              }}
            >
              Cancel
            </button>
          </>
        );
        break;
    }
  }, []);

  return (
    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b space-x-4">
      {buttonRow}
    </div>
  );
}
