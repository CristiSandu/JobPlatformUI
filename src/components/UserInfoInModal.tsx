import { User } from "../api/ui-service-client";

export interface UserInfoInModalInterface {
  userInfo: User | null;
}

export default function UserInfoInModal({
  userInfo,
}: UserInfoInModalInterface) {
  return (
    <>
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
            <div className="text-3xl font-semibold">{userInfo?.age}</div>
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
    </>
  );
}
