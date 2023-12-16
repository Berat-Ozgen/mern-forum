import { useEffect, useState } from "react";
import { editProfile } from "../apiFetch/editProfile";
import { editDataI } from "../models/editDataI.models";
import { useAppSelector } from "../reduxHooks/storeHook";
import {useParams} from 'react-router-dom'


const ProflieSettings = () => {
  const { log } = console;
  const params = useParams()
  const { userInformation } = useAppSelector((state) => state.usersData);
  const [username, setUsername] = useState<editDataI["username"]>("");
  const [biography, setBiography] = useState<editDataI["biography"]>("");

  const editData: editDataI = {
    username: username,
    biography: biography,
  };

  

  

  // profile güncelleme
  const handleEditProfile = async () => {
    await editProfile(editData, userInformation?._id as string).then((res) => {
      res.status === 200
        ? alert("Profiliniz başarılı bir şekilde güncellendi")
        : alert("Profilinizi güncellerken malesef bir hata ile karşılaştık");
    });
  };

  useEffect(() => {
    
  },[])

  if(params.username === undefined) {
    return( <div className="flex pt-6 flex-col items-center  w-full bg-gray-900 text-white">
      Lütfen Önce giriş yapınız
    </div>
    ) 
  }

  return (
    <div className="flex pt-6 flex-col items-center  w-full bg-gray-900 text-white">
      <div className="flex flex-[1]  w-48 h-48">
        <img
          className="rounded-xl shadow-sm shadow-orange-100 w-full h-full"
          src="https://picsum.photos/id/237/200/300"
          alt="s"
        />
      </div>
      <div className="flex flex-col flex-[4] items-center justify-evenly  w-full">
        <div className="flex flex-col w-full items-center">
          <label className=" mb-2 text-base font-medium text-white">
            Kullanıcı Adı
          </label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            placeholder={userInformation?.username}
            className=" bg-gray-700 outline-none w-2/5 text-sm rounded-lg p-2.5 placeholder:opacity-50 text-white"
          />
        </div>
        <div className="flex flex-col w-full items-center">
          <label className="mb-2 text-base font-medium text-white">
            Biography
          </label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBiography(e.target.value)
            }
            placeholder={userInformation?.biography}
            className="bg-gray-700 outline-none w-2/5 text-sm rounded-lg p-2.5 placeholder:opacity-50 text-white"
          />
        </div>

        <div className="flex flex-col items-center w-full">
          <button
            onClick={handleEditProfile}
            className="px-6 py-2.5 w-1/12 bg-blue-600 text-white font-medium text-xs rounded hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none  active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProflieSettings;
