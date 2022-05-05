import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import { ProfilePage } from "./ProfilePage";
import { UserCardParameter } from "../components/UserCardElement";

export type UserPageParams = {
  userInfo: UserCardParameter;
  isRecruiter: number;
};

export const ProfilePageTemplate = ({
  userInfo,
  isRecruiter: isRecruiters,
}: UserPageParams): JSX.Element => {
  return (
    <>
      <PageFooterHeaderTemplate>
        <ProfilePage userInfo={userInfo} isRecruiter={isRecruiters} />
      </PageFooterHeaderTemplate>
    </>
  );
};
