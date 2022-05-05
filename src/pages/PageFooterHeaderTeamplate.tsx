import type { ReactNode } from "react";
// import { Loader } from "@/components/atoms";
// import type { MetricsHeaderProps } from "@/components/molecules/MetricsHeader";
// import { MetricsHeader } from "@/components/molecules/MetricsHeader";
import { SideNavBar } from "../components/SideBarNav";

export type NavigatorProps = {
  isLoading?: boolean;
  children: ReactNode;
  isUserAuthorized?: boolean;
  isAdmin: boolean;
};

export const PageFooterHeaderTemplate = ({
  isLoading,
  children,
  isUserAuthorized = true,
  isAdmin,
}: NavigatorProps): JSX.Element => {
  return (
    <div className="flex min-h-full w-full select-none">
      <div className="hidden md:block">
        <SideNavBar isUserAuthorized={isUserAuthorized} isAdmin={isAdmin} />
      </div>
      {/* <div className="flex flex-col min-h-full w-full bg-appBackground p-0 m-0 md:pl-20">
        <MetricsHeader
          entityName={headerProps.entityName}
          entityId={headerProps.entityId}
          metricName={headerProps.metricName}
          dataResolution={headerProps.dataResolution}
          trendIndicator={headerProps.trendIndicator}
          isFavouriteMetric={headerProps.isFavouriteMetric}
          onMetricFavouriteChanged={headerProps.onMetricFavouriteChanged}
          renderTabs={headerProps.renderTabs}
          isLoading={isLoading}
        /> */}
      <main className="md:w-full md:max-w-xl md:mx-auto pb-20 overflow-visible flex-1 overflow-y-auto scrollbar-hide">
        {isLoading === true ? "test" : children}
      </main>
      <div className="md:hidden sticky bottom-0 z-10"></div>
    </div>
  );
};
