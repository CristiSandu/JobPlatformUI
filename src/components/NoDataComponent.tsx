import React from "react";
import NoDataImage from "../Images/no_data_logo.svg";

export interface NoDataComponentInterface {
  imageName: string;
  text: string;
  height?: string;
}

export default function NoDataComponent({
  imageName,
  text,
  height,
}: NoDataComponentInterface): JSX.Element {
  return (
    <div className="absolute">
      <div
        className={`grid place-items-center relative  ${
          height !== null ? height : "top-60"
        }    space-y-10 `}
      >
        <img
          className="z-0"
          src={imageName}
          height={308}
          width={316}
          alt="No Data Logo"
        />
        <p className="title-primary text-MainBlue font-bold text-3xl rounded">
          {text}
        </p>
      </div>
    </div>
  );
}
