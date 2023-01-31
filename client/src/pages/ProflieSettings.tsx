import React from "react";

const ProflieSettings = () => {
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
          <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
            Kullanıcı Adı
          </label>
          <input className=" bg-gray-700 border w-2/5 border-gray-600 text-sm rounded-lg p-2.5 placeholder-gray-400 text-white" />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
            Açıklama
          </label>
          <input className=" bg-gray-700 border w-2/5 border-gray-600 text-sm rounded-lg p-2.5 placeholder-gray-400 text-white" />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
            Şifre
          </label>
          <input className=" bg-gray-700 border w-2/5 border-gray-600 text-sm rounded-lg p-2.5 placeholder-gray-400 text-white" />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
            Şifre Tekrarı
          </label>
          <input className=" bg-gray-700 border w-2/5 border-gray-600 text-sm rounded-lg p-2.5 placeholder-gray-400 text-white" />
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
