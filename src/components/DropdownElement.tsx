/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { DomainModel, DomainModelExtended } from "../api/ui-service-client";
import { isNullOrUndefined } from "../util/generic-helpers";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type DropdownParameters = {
  dropdownName: string;
  elements?: DomainModel[];
  elementsWithCount?: DomainModelExtended[];
  preSelectedElement?: string | null | undefined;
  selectedElementChange: (element: string, dropdownName: string) => void;
};

export default function DropdownElement({
  dropdownName,
  elements,
  elementsWithCount,
  preSelectedElement,
  selectedElementChange,
}: DropdownParameters) {
  const [selectedElement, setSelectedElement] = useState<
    string | null | undefined
  >(!isNullOrUndefined(preSelectedElement) ? preSelectedElement : dropdownName);

  const elementsRendered = elements?.map((element: DomainModel) => (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#1"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
          onClick={() => {
            setSelectedElement(element.name ?? "Domains");
            selectedElementChange(element.name ?? "Domains", dropdownName);
          }}
        >
          {element.name}
        </a>
      )}
    </Menu.Item>
  ));

  const elementsRenderedCount = elementsWithCount?.map(
    (element: DomainModelExtended) => (
      <Menu.Item>
        {({ active }) => (
          <a
            href="#1"
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "px-4 py-2 text-sm block"
            )}
            onClick={() => {
              setSelectedElement(element.name ?? "Domains");
              selectedElementChange(element.name ?? "Domains", dropdownName);
            }}
          >
            <div className="flex justify-between">
              <div>{element.name}</div>
              <div>{element.count}</div>
            </div>
          </a>
        )}
      </Menu.Item>
    )
  );

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded border-2 border-MainBlue shadow-md px-4 py-3 bg-white text-base font-bold  text-gray-700 hover:bg-gray-50 focus:outline-none">
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {elements !== undefined ? elementsRendered : elementsRenderedCount}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
