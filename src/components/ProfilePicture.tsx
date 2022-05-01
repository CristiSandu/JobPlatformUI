import React from "react";
import UserFImage from "../Images/userF_image.svg";
import UserMImage from "../Images/userM_image.svg";

export type ProfilePictureParameter = {
  isMasculine: boolean;
  image_url?: string | null;
  height: string;
  width: string;
};

export default function ProfilePicture({
  isMasculine,
  image_url,
  height,
  width,
}: ProfilePictureParameter) {
  return (
    <>
      {isMasculine ? (
        <img
          className="z-0"
          src={UserMImage}
          height={height}
          width={width}
          alt="React Logo"
        />
      ) : (
        <img
          className="z-0"
          src={UserFImage}
          height={height}
          width={width}
          alt="React Logo"
        />
      )}
    </>
  );
}
