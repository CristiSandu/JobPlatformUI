import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobExtendedModel, User } from "../api/ui-service-client";
import { ButtonsType } from "../util/constants";

export interface ButtonsModalLayoutInterface {
  userInfo: User | null;
  jobInfo: JobExtendedModel | null;
  buttonsType: ButtonsType;
  checkAJobCall?: (jobId: string, value: boolean) => void;
  closeModalCall: (isOpen: boolean) => void;
  deleteUserCall?: (UID: string) => void;
}

export default function ButtonsModalLayout({
  userInfo,
  jobInfo,
  buttonsType,
  checkAJobCall,
  closeModalCall,
  deleteUserCall,
}: ButtonsModalLayoutInterface) {
  const navigate = useNavigate();
  const [buttonRow, setButtonRow] = useState<JSX.Element>();

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
                navigate("/profilePage2");
              }}
            >
              Extended Page
            </button>
            <button
              className="btn-primary bg-SecondBlue"
              type="button"
              onClick={() => closeModalCall(false)}
            >
              Expired
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
              onClick={() => closeModalCall(false)}
            >
              Apply
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
    }
  }, []);

  return (
    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b space-x-4">
      {buttonRow}
    </div>
  );
}
