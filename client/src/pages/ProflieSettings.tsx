import React from "react";
import { useAppSelector } from "../reduxHooks/storeHook";

const ProflieSettings = () => {
  const { userInformation } = useAppSelector((state) => state.usersData);

  return (
    <div className="flex pt-6 flex-col items-center  w-full bg-gray-900 text-white">
      <div className="flex flex-[1]  w-56 h-56">
        <img
          className="rounded-full w-full h-full"
          src="https://picsum.photos/id/237/200/300"
          alt="s"
        />
      </div>
      <div className="flex flex-col flex-[3] items-center justify-around pt-20  w-full">
        <div className="flex flex-col w-full items-center">
          <label className=" mb-2 text-base font-medium text-white">
            Kullanıcı Adı
          </label>
          <input
            placeholder={userInformation?.username}
            className=" bg-gray-700 w-2/5 text-sm rounded-lg p-2.5 placeholder:opacity-50 text-white"
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="mb-2 text-base font-medium text-white">
            Biography
          </label>
          <input
            placeholder={userInformation?.biography}
            className="bg-gray-700  w-2/5 text-sm rounded-lg p-2.5 placeholder:opacity-50 text-white"
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className=" mb-2 text-base font-medium text-white">
            Şifre
          </label>
          <input
            placeholder="Yeni Şifrenizi Giriniz"
            type={"password"}
            className=" bg-gray-700  w-2/5  text-sm rounded-lg p-2.5  text-white"
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="mb-2 text-base font-medium text-white">
            Şifre Tekrarı
          </label>
          <input
            placeholder="Yeni Şifrenizi Tekrar  Giriniz"
            type={"password"}
            className=" bg-gray-700  w-2/5 text-sm rounded-lg p-2.5 text-white"
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <button className="px-6 py-2.5 w-1/12 bg-blue-600 text-white font-medium text-xs rounded hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProflieSettings;
