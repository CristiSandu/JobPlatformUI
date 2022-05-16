import Spinner from "../Images/spinner.svg";

export const LoadingSpinner = (): JSX.Element => (
  <div className="flex h-12 w-max items-center ">
    <div className="h-6 w-6 animate-ping animate-bounce bg-MainBlue rounded-full mr-1" />
    <div className="h-6 w-6 animate-ping bg- rounded-full mr-1" />
    <div className="h-6 w-6 animate-ping animate-bounce bg-LightBlue rounded-full" />
  </div>
);
