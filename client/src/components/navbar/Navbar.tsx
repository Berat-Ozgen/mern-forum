import React, { useContext, useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { ImExit } from "react-icons/im";
import AuthContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IgetAllUsers } from "../../models/Navbar.models";

const Navbar: React.FC = () => {
  const [usernamee, setUserName] = useState("" as string);
  const [allUsers, setAllUsers] = useState<IgetAllUsers[]>([]);

  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOut = () => {
    localStorage.removeItem("users");
    navigate("/login");
    setUser(false as boolean);
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
        className="flex-[2] text-center text-cyan-300 text-xl"
        onClick={() => navigate("/")}
      >
        BRTFORM
      </div>

      <div className="flex flex-[5] justify-center items-center">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName(e.target.value as string);
          }}
          onFocus={getAllUsers}
          type="text"
          id="success"
          className="bg-green-50 border border-none outline-none text-orange-500  placeholder-sky-700  text-sm rounded-lg block w-3/4 p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="aramak isteginiz konu nedir ?"
        />
      </div>

      <div className="flex flex-[3] justify-evenly">
        <div>
          {user ? (
            <img
              onClick={() => navigate("/profile")}
              className="w-10 h-10 rounded-full"
              src="https://picsum.photos/200/300"
              alt="Rounded avatar"
            />
          ) : (
            <div className="text-white text-lg flex items-center justify-center  w-full h-full">
              Misafir
            </div>
          )}
        </div>
        <div className="cursor-pointer">
          {user ? (
            <div className="flex items-center justify-center  w-full h-full">
              <MdOutlineNotifications color="grey" size={35} />
            </div>
          ) : (
            <div
              onClick={() => navigate("/register")}
              className="text-white text-lg flex items-center justify-center  w-full h-full"
            >
              Kayıt ol
            </div>
          )}
        </div>
        <div>
          {user ? (
            <div
              onClick={handleOut}
              className="flex items-center justify-center  w-full h-full"
            >
              <ImExit size={32} color={"grey"} />
            </div>
          ) : (
            <div
              onClick={() => navigate("/login")}
              className="text-white text-lg flex items-center justify-center  w-full h-full"
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
