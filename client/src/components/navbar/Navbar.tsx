import React, { useContext } from "react";
import authContext from "../../context/auth";

const Navbar: React.FC = () => {
  const data = useContext(authContext);
  console.log(data);
  return (
    <div className="flex justify-around items-center h-16 ali w-full bg-gray-800 border border-black ">
      <div className="flex-[2] text-center text-cyan-300 text-xl">BRTFORM</div>

      <div className="flex-[6]">
        <input
          type="text"
          id="success"
          className="bg-green-50 border border-none outline-none text-orange-500  placeholder-sky-700  text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="aramak isteginiz konu nedir ?"
        />
      </div>

      <div className="flex flex-[2] justify-evenly">
        <div>
          <img
            className="w-10 h-10 rounded-full"
            src="https://picsum.photos/200/300"
            alt="Rounded avatar"
          />
        </div>
        <div>
          <img
            className="w-10 h-10 rounded-full"
            src="https://picsum.photos/200/300"
            alt="Rounded avatar"
          />
        </div>
        <div>
          <img
            className="w-10 h-10 rounded-full"
            src="https://picsum.photos/200/300"
            alt="Rounded avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
