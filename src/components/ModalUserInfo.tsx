import React from "react";
import ProfilePicture from "./ProfilePicture";
import JobPostLogo from "../Images/job_post_logo.svg";
import { JobExtendedModel, JobsClient, User } from "../api/ui-service-client";
import UserInfoInModal from "./UserInfoInModal";
import JobInfoInModal from "./JobInfoInModal";
import MainModalContent from "./MainModalContent";
import { isNullOrUndefined } from "../util/generic-helpers";
import ButtonsModalLayout from "./ButtonsModalLayout";
import { ButtonsType, UserTypeConst } from "../util/constants";
import { AxiosHelpers } from "../util/axios-helper";

export type ModalInformationParam = {
  userInfo: User | null;
  jobInfo: JobExtendedModel | null;
  status: number;
  isAdmin: boolean;
  buttonsType: ButtonsType;
  deleteUserCall?: (UID: string) => void;
  validationChange?: (position: number) => void;
  checkAJobCall?: (jobId: string, value: boolean) => void;
};

export default function ModalUserInfo({
  userInfo,
  jobInfo,
  status,
  buttonsType,
  isAdmin,
  deleteUserCall,
  validationChange,
  checkAJobCall,
}: ModalInformationParam) {
  const [showModal, setShowModal] = React.useState(false);

  let newObject = window.localStorage.getItem("userInfo");
  let newobj = !isNullOrUndefined(newObject) ? newObject : "";
  const userinfo: User = JSON.parse(newobj);

  function closeModalCall(position: boolean): void {
    setShowModal(position);
  }

  const jobData = new JobsClient(
    process.env.REACT_APP_UI_SERVICE,
    AxiosHelpers.axiosClient
  );

  function expireHandler(): void {
    const fetchData = async () => {
      const response = await jobData.expireJob({
        isExpired: true,
        jobId: jobInfo?.docID,
      });

      if (!response) {
        alert("Error\n Can't expire this offer");
      } else {
        alert("Success\n Offer expired");
      }
    };

    fetchData().catch(console.error);
  }

  function deleteOffers(): void {
    const fetchData = async () => {
      if (!isNullOrUndefined(jobInfo?.docID) && jobInfo?.docID !== undefined) {
        const response = await jobData.jobsDELETE(jobInfo?.docID);
        if (!response) {
          alert("Error\nCan't delete this offer");
        } else {
          alert("Success\nOffer deleted");
        }
      }
    };

    fetchData().catch(console.error);
  }

  return (
    <>
      <button
        className="w-1/6 h-20 absolute  bg-transparent text-white  font-bold uppercase text-sm  py-3 rounded   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 pr-8 border-b border-solid border-slate-200 rounded-t">
                  {userInfo !== null ? (
                    <ProfilePicture
                      height="191"
                      width="191"
                      isMasculine={userInfo?.gender !== "F"}
                    />
                  ) : (
                    <img
                      className="pt-2 pl-3 z-0"
                      src={JobPostLogo}
                      height="161"
                      width="207"
                      alt="React Logo"
                    />
                  )}

                  {userInfo !== null ? (
                    <UserInfoInModal userInfo={userInfo} />
                  ) : (
                    <JobInfoInModal jobInfo={jobInfo} />
                  )}
                </div>
                {/*body*/}
                <MainModalContent
                  isRecruiter={userinfo.type === UserTypeConst.Recruiter}
                  status={status}
                  jobInfo={jobInfo}
                  userInfo={userInfo}
                  validationChange={
                    validationChange !== undefined ? validationChange : () => {}
                  }
                />
                {/*footer*/}
                <ButtonsModalLayout
                  buttonsType={buttonsType}
                  closeModalCall={closeModalCall}
                  deleteOffers={deleteOffers}
                  expireHandler={expireHandler}
                  jobInfo={jobInfo}
                  userInfo={userInfo}
                  checkAJobCall={checkAJobCall}
                  deleteUserCall={deleteUserCall}
                />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
