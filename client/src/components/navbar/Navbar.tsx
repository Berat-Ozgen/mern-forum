import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IgetAllUsers } from "../../models/Navbar.models";
import { useAppSelector, useAppDispatch } from "../../reduxHooks/storeHook";
import { usersExit } from "../../reduxSlice/fetchSlice/loginUserSlice";

const Navbar: React.FC = () => {
  const [usernamee, setUserName] = useState("" as string);
  const [notification, setNotification] = useState(false);
  const [allUsers, setAllUsers] = useState<IgetAllUsers[]>([]);
  const { userInformation } = useAppSelector((state) => state.usersData);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleOut = () => {
    dispatch(usersExit(""));
    navigate("/login");
  };

  const getAllUsers = async (): Promise<void> => {
    await axios
      .get("http://localhost:8000/api/users/get-all-users")
      .then((res) => {
        if (res.status === 200) {
          setAllUsers(res.data);
        }
      });
  };

  const filtredUsers = allUsers?.filter((item) =>
    item.username.startsWith(usernamee)
  );

  return (
    <div className="flex justify-around items-center h-16 ali w-full bg-gray-800 border border-black ">
      <div
        className="flex-[2] text-center cursor-pointer text-cyan-300 font-semibold  text-3xl"
        onClick={() => navigate("/")}
      >
        BRTFORM
      </div>

      <div className="relative flex flex-[5] justify-center items-center">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName(e.target.value as string);
          }}
          onFocus={getAllUsers}
          value={usernamee}
          className="bg-green-50 border border-none outline-none text-orange-500  placeholder-sky-700  text-sm rounded-lg block w-3/4 p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="aramak isteginiz konu nedir ?"
        />
        {usernamee.length > 3 &&
          filtredUsers.map((item) => (
            <div
              onClick={() => {
                navigate(`/profile/${item.username}`);
                setUserName("");
              }}
              className="absolute border-l border-r border-b cursor-pointer hover:bg-gray-900  p-1 bg-gray-800 text-cyan-200 w-9/12 top-11"
            >
              {item.username}
            </div>
          ))}
      </div>

      <div className="flex flex-[3] justify-evenly">
        <div>
          {userInformation && (
            <img
              onClick={() => navigate(`/profile/${userInformation.username}`)}
              className="w-10 h-10 rounded-full"
              src="https://picsum.photos/200/300"
              alt="Rounded avatar"
            />
          )}
        </div>
        <div className="cursor-pointer">
          {userInformation ? (
            <div className="flex items-center relative justify-center  w-full h-full">
              <MdOutlineNotifications
                color="grey"
                size={35}
                onClick={() => setNotification(!notification)}
              />
              {notification && (
                <div className="absolute top-10 z-10 bg-neutral-600 flex flex-col justify-around   w-44 h-28 border">
                  <div className="text-base w-full hover:bg-slate-800 cursor-pointer  flex justify-evenly items-center">
                    <span>berat sizi takip etti</span>
                  </div>
                  <div className="text-base w-full  flex hover:bg-slate-800 cursor-pointer justify-evenly items-center">
                    <span>berat sizi takip etti</span>
                  </div>
                  <div className="text-base w-full hover:bg-slate-800 cursor-pointer flex justify-evenly items-center">
                    <span>berat sizi takip etti</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div
              onClick={() => navigate("/register")}
              className="text-white text-lg flex items-center justify-center cursor-pointer hover:text-gray-400  w-full h-full"
            >
              Kayıt ol
            </div>
          )}
        </div>
        <div>
          {userInformation ? (
            <div
              onClick={handleOut}
              className="flex items-center justify-center  w-full h-full"
            >
              <ImExit size={32} color={"grey"} />
            </div>
          ) : (
            <div
              onClick={() => navigate("/login")}
              className="text-white text-lg flex items-center justify-center cursor-pointer hover:text-gray-400 w-full h-full"
            >
              Giriş yap
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
