import React, { useContext } from "react";
import AuthContext from "../../context/authContext";

const Footer: React.FC = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <footer className="p-4 bg-white border-t-2 border-gray-700 shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="mb-4 md:mb-0">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            brtForm
          </span>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 md:mb-0 dark:text-gray-400">
          {["About", "Privacy Policy", "Licensing", "Contact"].map((item) => (
            <li key={item}>
              <div className="mr-4 hover:underline md:mr-6">{item}</div>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 md:text-center dark:text-gray-400">
        © 2022 <div className="hover:underline">Flowbite™</div>. All Rights
        Reserved.
      </span>
    </footer>
  );
};

export default Footer;
