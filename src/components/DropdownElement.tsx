/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type DropdownParameters = {
  dropdownName: string;
  elements?: string[];
  selectedElementChange: (element: string, dropdownName: string) => void;
};

export default function DropdownElement({
  dropdownName,
  elements,
  selectedElementChange,
}: DropdownParameters) {
  const [selectedElement, setSelectedElement] = useState<string>(dropdownName);

  const elementsRendered = elements?.map((element: string) => (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#1"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
          onClick={() => {
            setSelectedElement(element);
            selectedElementChange(element, dropdownName);
          }}
        >
          {element}
        </a>
      )}
    </Menu.Item>
  ));
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded border border-MainBlue shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-LightBlue">
          {selectedElement}
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 justify-end"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{elementsRendered}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
