/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type ValidationSwitchParams = {
  status: number;
  validationChange: (position: number) => void;
};

export default function ValidationSwitch({
  status,
  validationChange,
}: ValidationSwitchParams) {
  const [selectedElement, setSelectedElement] = useState<number>(status);
  const [selectedMessage, setSelectedMessage] = useState<string>(
    status !== 2 ? (status !== 1 ? "On Hold" : "Accepted") : "Rejected"
  );

  function validationPress(position: number): void {
    switch (position) {
      case 0:
        setSelectedMessage("On Hold");
        break;
      case 1:
        setSelectedMessage("Accepted");
        break;
      case 2:
        setSelectedMessage("Rejected");
        break;
    }
    setSelectedElement(position);
    validationChange(position);
  }

  return (
    <div className="grow justify-between space-y-2 w-56">
      <div className="flex justify-between items-center h-9 border-4 border-LightBlue gb-WhiteBlue rounded-2xl p-2">
        <div
          className={`h-6 w-6 rounded-full  ${
            selectedElement === 1
              ? "bg-GreenCheck"
              : "bg-CardGray hover:bg-GreenCheck"
          } `}
          onClick={() => {
            validationPress(1);
          }}
        ></div>
        <div
          className={`h-6 w-6 rounded-full  ${
            selectedElement === 0
              ? "bg-YellowWaiting"
              : "bg-CardGray hover:bg-YellowWaiting"
          } `}
          onClick={() => {
            validationPress(0);
          }}
        ></div>
        <div
          className={`h-6 w-6 rounded-full  ${
            selectedElement === 2
              ? "bg-RedDelete"
              : "bg-CardGray hover:bg-RedDelete"
          } `}
          onClick={() => {
            validationPress(2);
          }}
        ></div>
      </div>
      <p
        className={`${
          selectedElement === 0
            ? "text-YellowWaiting"
            : selectedElement === 2
            ? "text-RedDelete"
            : "text-GreenCheck"
        } text-center font-bold text-xl`}
      >
        {selectedMessage}
      </p>
    </div>
  );
}
