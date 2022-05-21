import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import { ProfilePage } from "./ProfilePage";
import { UserCardParameter } from "../components/UserCardElement";

export type UserPageParams = {
  userInfo?: UserCardParameter;
  isRecruiter: number;
};

export const ProfilePageTemplate = ({
  userInfo,
  isRecruiter,
}: UserPageParams): JSX.Element => {
  return (
    <>
      <PageFooterHeaderTemplate isAdmin={isRecruiter === 0}>
        <ProfilePage userInfo={userInfo} isRecruiter={isRecruiter} />
      </PageFooterHeaderTemplate>
    </>
  );
};
