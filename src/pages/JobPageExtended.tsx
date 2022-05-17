// JobPageExtended.tsx
import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import { JobUserCardParameter } from "../components/JobUserCardElement";
import JobPostLogo from "../Images/job_post_logo.svg";
import UserCardElement from "../components/UserCardElement";
import { UserProfileData } from "./ProfileFormPage";

export type JobPageExtendedParams = {
  jobInfo: JobUserCardParameter;
};

export const JobPageExtended = ({
  jobInfo,
}: JobPageExtendedParams): JSX.Element => {
  const elementsList: UserProfileData[] = [
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: 32,
      description: "description",
      description_last_job: "Inginer Programator (.NET with React)",

      last_level_grad: "UPB",
      location: "Bucharest, Romania",
      phone: "0725635489",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: 32,
      description: "description",
      description_last_job: "asdasdasds",
      last_level_grad: "UPB",
      location: "Bucharest, Romania",
      phone: "0725635489",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: 32,
      description: "description",
      description_last_job: "asdasdasds",
      last_level_grad: "UPB",
      location: "Bucharest, Romania",
      phone: "0725635489",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: 32,
      description: "description",
      description_last_job: "asdasdasds",
      last_level_grad: "UPB",
      location: "Bucharest, Romania",
      phone: "0725635489",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: 32,
      description: "description",
      description_last_job: "asdasdasds",
      last_level_grad: "UPB",
      location: "Bucharest, Romania",
      phone: "0725635489",
      name: "Sandu Ilie Cristian",
    },
  ];

  let elementsRendered = elementsList.map((element: UserProfileData) => (
    <UserCardElement userInfo={element} />
  ));
  return (
    <PageFooterHeaderTemplate isAdmin={false}>
      <div className="pt-8 w-full">
        <div className="space-y-12 scroll">
          <div className="grid grid-cols-4 gap-4">
            <button className="btn-primary bg-SecondBlue focus:bg-LightBlue">
              Update
            </button>
            <button className="btn-primary bg-SecondBlue focus:bg-LightBlue">
              Expired
            </button>
            <button className="btn-primary bg-RedDelete focus:bg-LightBlue">
              Delete
            </button>
            <button className="btn-primary focus:bg-LightBlue">Back</button>
          </div>
          <div className="flex items-start justify-between p-5 pr-8 border-b border-solid border-slate-200 rounded-t">
            <img
              className="z-0"
              src={JobPostLogo}
              height="161"
              width="207"
              alt="React Logo"
            />
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
                  <div className="text-sm font-mono">{jobInfo?.date}</div>
                </div>
                <div className="flex space-x-4 items-center">
                  <div className="rounded bg-LightBlue text-WhiteBlue px-4 py-2 text-center font-bold text-sm items-center h-max w-32">
                    {jobInfo?.type}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="space-y-5">{elementsRendered}</div>
        </div>
      </div>
    </PageFooterHeaderTemplate>
  );
};
