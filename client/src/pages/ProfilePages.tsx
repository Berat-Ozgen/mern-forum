import axios, { AxiosHeaders } from "axios";
import { useEffect, useContext, useState } from "react";
import QuestionsCont from "../components/question";
import AuthContext from "../context/authContext";

interface User {
  createdAt: string;
  email: string;
  images: string;
  password: string;
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
}

interface IUsersPost {
  createdAt: string;
  des: string;
  updatedAt: string;
  userId: string;
  username: string;
  __v: number;
  _id: string;
}

const ProfilePages: React.FC = (): JSX.Element => {
  const [aUsers, setAUsers] = useState<User>();
  const [usersPosts, setUsersPosts] = useState<IUsersPost[]>();

  const { user } = useContext(AuthContext);

  const getAUsers = async (): Promise<void> => {
    await axios
      .get(`http://localhost:8000/api/users/get-user?username=${user.username}`)
      .then((res) => {
        setAUsers(res.data);
      });
  };

  const getAUsersPosts = async (): Promise<void> => {
    await axios
      .get(
        `http://localhost:8000/api/questions/get-usersposts?username=${user.username}`
      )
      .then((res) => {
        setUsersPosts(res.data);
      });
  };

  useEffect(() => {
    if (aUsers || usersPosts === undefined) {
      getAUsers();
      getAUsersPosts();
    }
  }, []);

  return (
    <div className="w-full flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-1 flex-col justify-evenly items-center">
        <div>
          <img
            className="w-36 h-36 rounded"
            src="https://picsum.photos/200/305"
            alt="Default avatar"
          />
        </div>
        <div className="text-green-200 text-4xl">{aUsers?.username}</div>
        <div className="text-green-200 text-lg">
          Türkiyede yaşıyorum javascirpt react typescript ile ugraşıyorum
        </div>
      </div>
      <div className="flex flex-1 flex-col  items-center  justify-evenly">
        {usersPosts?.map((item: any) => (
          <QuestionsCont
            id={item.userId}
            name={item.username}
            key={item.createdAt}
            img={item.img || "https://picsum.photos/id/237/200/300"}
            question={item.des}
          />
        ))}
      </div>
      <div className="flex flex-1">3</div>
    </div>
  );
};

export default ProfilePages;
