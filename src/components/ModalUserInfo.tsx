import React from "react";
import ProfilePicture from "./ProfilePicture";
import JobPostLogo from "../Images/job_post_logo.svg";
import { useNavigate } from "react-router-dom";
import { JobExtendedModel, User } from "../api/ui-service-client";
import UserInfoInModal from "./UserInfoInModal";
import JobInfoInModal from "./JobInfoInModal";
import MainModalContent from "./MainModalContent";
import { isNullOrUndefined } from "../util/generic-helpers";
import ButtonsModalLayout from "./ButtonsModalLayout";
import { ButtonsType } from "../util/constants";

export type ModalInformationParam = {
  userInfo: User | null;
  jobInfo: JobExtendedModel | null;
  isAdmin: boolean;
  buttonsType: ButtonsType;
  deleteUserCall?: (UID: string) => void;
  checkAJobCall?: (jobId: string, value: boolean) => void;
};

export default function ModalUserInfo({
  userInfo,
  jobInfo,
  buttonsType,
  isAdmin,
  deleteUserCall,
  checkAJobCall,
}: ModalInformationParam) {
  const [showModal, setShowModal] = React.useState(false);

  let newObject = window.localStorage.getItem("userInfo");
  let newobj = !isNullOrUndefined(newObject) ? newObject : "";
  const userinfo: User = JSON.parse(newobj);

  function validationChange(position: number): void {
    console.log(position);
  }

  function closeModalCall(position: boolean): void {
    setShowModal(position);
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
                  isRecruiter={userinfo.type === "Recruiter"}
                  jobInfo={jobInfo}
                  userInfo={userInfo}
                  validationChange={validationChange}
                />
                {/*footer*/}
                <ButtonsModalLayout
                  buttonsType={buttonsType}
                  closeModalCall={closeModalCall}
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
