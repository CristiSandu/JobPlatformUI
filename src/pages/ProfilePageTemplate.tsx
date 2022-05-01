import { PageFooterHeaderTemplate } from "./PageFooterHeaderTeamplate";
import { ProfilePage } from "./ProfilePage";
import { UserCardParameter } from "../components/UserCardElement";

export type UserPageParams = {
  userInfo: UserCardParameter;
};

export const ProfilePageTemplate = ({
  userInfo,
}: UserPageParams): JSX.Element => {
  return (
    <>
      <PageFooterHeaderTemplate>
        <ProfilePage userInfo={userInfo} />
      </PageFooterHeaderTemplate>
    </>
  );
};
