import React from "react";
import ProfilePicture from "./ProfilePicture";
import { UserCardParameter } from "./UserCardElement";
import NoDataLogo from "../Images/no_data_logo.svg";
import JobPostLogo from "../Images/job_post_logo.svg";
import { JobUserCardParameter } from "./JobUserCardElement";

export type ModalInformationParam = {
  userInfo: UserCardParameter | null;
  jobInfo: JobUserCardParameter | null;
  isAdmin: boolean;
};

export default function ModalUserInfo({
  userInfo,
  jobInfo,
  isAdmin,
}: ModalInformationParam) {
  const [showModal, setShowModal] = React.useState(false);
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
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <div className="title-primary text-4xl font-semibold">
                          {userInfo?.name}
                        </div>
                        <div className="title-primary text-base font-mono">
                          {userInfo?.email}
                        </div>
                      </div>

                      <div className="flex space-x-12">
                        <div className="flex content-center items-end">
                          <div className="text-3xl font-semibold">
                            {userInfo?.age}
                          </div>
                          <div className="text-sm font-mono">Years</div>
                        </div>
                        <div className="flex space-x-4 items-center">
                          <div className="rounded bg-MainBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
                            {userInfo?.type}
                          </div>
                          <div className="rounded bg-LightBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
                            {userInfo?.domain}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div>
                        <div className="title-primary text-4xl font-semibold">
                          {jobInfo?.name}
                        </div>
                        <div className="title-primary text-base font-mono">
                          {jobInfo?.employer}
                        </div>
                        <div className="title-primary text-base font-mono">
                          Nr:{jobInfo?.applicants}/{jobInfo?.number_of_places}
                        </div>
                      </div>

                      <div className="flex space-x-12">
                        <div className="content-center items-end">
                          <div className="text-sm font-mono">Date</div>
                          <div className="text-sm font-mono">
                            {jobInfo?.date}
                          </div>
                        </div>
                        <div className="flex space-x-4 items-center">
                          <div className="rounded bg-LightBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
                            {jobInfo?.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/*body*/}
                {userInfo !== null ? (
                  <div className="relative p-6 space-y-8 flex-auto">
                    <div>
                      <div className="font-semibold text-xl font-mono">
                        Last Level Graduate
                      </div>
                      <div className="text-4xl">
                        Universiatate Polithenica Bucuresti
                      </div>
                    </div>
                    {true ? (
                      <div className="flex space-x-6 justify-center items-center">
                        <img
                          className="snap-center z-0"
                          src={NoDataLogo}
                          height="174"
                          width="167"
                          alt="React Logo"
                        />
                        <div className="text-4xl">No Job apply/post yet</div>
                      </div>
                    ) : (
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their
                        perception of themselves! They're slowed down by their
                        perception of themselves. If you're taught you can’t do
                        anything, you won’t do anything. I was taught I could do
                        everything. I always felt like I could do anything.
                        That’s the main thing people are controlled by!
                        Thoughts- their perception of themselves! They're slowed
                        down by their perception of themselves. If you're taught
                        you can’t do anything, you won’t do anything. I was
                        taught I could do everything. I always felt like I could
                        do anything. That’s the main thing people are controlled
                        by! Thoughts- their perception of themselves! They're
                        slowed down by their perception of themselves. If you're
                        taught you can’t do anything, you won’t do anything. I
                        was taught I could do everything. I always felt like I
                        could do anything. That’s the main thing people are
                        controlled by! Thoughts- their perception of themselves!
                        They're slowed down by their perception of themselves.
                        If you're taught you can’t do anything, you won’t do
                        anything. I was taught I could do everything.
                      </p>
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
                        Location: {jobInfo?.location}
                      </div>
                    </div>
                  </div>
                )}
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b space-x-4">
                  {userInfo !== null ? (
                    <>
                      <button
                        className="btn-primary bg-RedDelete"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn-primary"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : isAdmin ? (
                    <>
                      <button
                        className="btn-primary bg-GreenCheck"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Check
                      </button>
                      <button
                        className="btn-primary bg-RedDelete"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn-primary"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : jobInfo?.isMyOffer ? (
                    <>
                      <button
                        className="btn-primary bg-SecondBlue"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Extended Page
                      </button>
                      <button
                        className="btn-primary bg-SecondBlue"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Expired
                      </button>
                      <button
                        className="btn-primary bg-RedDelete"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn-primary"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn-primary"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
