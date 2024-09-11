import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-custom-bg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold font-roboto-serif text-custom-green">
                    JustDecide
                  </span>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="px-3 py-2 text-standard font-inter text-custom-light hover:text-custom-pink transition-colors duration-300"
                  >
                    Notes
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-standard font-inter text-custom-light hover:text-custom-pink transition-colors duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <DisclosureButton
                as="a"
                href="#"
                className="block px-3 py-2 text-standard font-inter text-custom-light hover:text-custom-pink transition-colors duration-300"
              >
                Notes
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block px-3 py-2 text-standard font-inter text-custom-light hover:text-custom-pink transition-colors duration-300"
              >
                Contact
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
