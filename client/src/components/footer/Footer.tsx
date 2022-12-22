import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white border-t-2  border-gray-700 shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              brtForm
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <div className="mr-4 hover:underline md:mr-6 ">About</div>
            </li>
            <li>
              <div className="mr-4 hover:underline md:mr-6">Privacy Policy</div>
            </li>
            <li>
              <div className="mr-4 hover:underline md:mr-6 ">Licensing</div>
            </li>
            <li>
              <div className="hover:underline">Contact</div>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 <div className="hover:underline">Flowbite™</div>. All Rights
          Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
