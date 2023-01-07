import axios from "axios";
import { useEffect, useContext, useState } from "react";
import {
  apiDeleteAPost,
  apiGetAUsers,
  apiGetAUsersPosts,
} from "../apiFetch/profilePagesFetch";
import QuestionsCont from "../components/question";
import AuthContext from "../context/authContext";
import { IUsersPost, User } from "../models/ProfilePages.models";

const ProfilePages: React.FC = (): JSX.Element => {
  const [aUsers, setAUsers] = useState<User>();
  const [usersPosts, setUsersPosts] = useState<IUsersPost[]>([]);

  const { user } = useContext(AuthContext);

  const getAUsers = async (): Promise<void> => {
    apiGetAUsers(user.username).then((res) => {
      setAUsers(res.data);
    });
  };

  const getAUsersPosts = async (): Promise<void> => {
    apiGetAUsersPosts(user.username).then((res) => {
      setUsersPosts(res.data);
    });
  };

  const deletePost: {
    userId: string;
  } = {
    userId: user._id,
  };

  const handleDelete = async (id: string) => {
    apiDeleteAPost(deletePost, id).then((res) => {
      res.status === 200
        ? window.location.reload()
        : console.log("başarısız oldu");
    });
  };

  useEffect(() => {
    getAUsers();
    getAUsersPosts();
  }, []);

  const handlePagePost = () => {
    console.log("deneme");
  };

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
        <div className="text-green-200 text-rubik-bubbles text-4xl">
          {aUsers?.username.toUpperCase()}
        </div>
        <div className="text-green-200 text-lg">
          Türkiyede yaşıyorum javascirpt react typescript ile ugraşıyorum
        </div>
      </div>
      <div className="flex flex-1 flex-col  items-center  justify-evenly">
        {usersPosts?.length > 0 ? (
          usersPosts?.map((item) => (
            <QuestionsCont
              handlePagePost={handlePagePost}
              name={item.username}
              img={item.img || "https://picsum.photos/id/237/200/300"}
              question={item.des}
              userId={item.userId}
              id={item._id}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <div className="text-6xl text-gray-500  w-full flex items-center justify-center">
            Hiç bir soru sormamışsın
          </div>
        )}
      </div>
      <div className="flex flex-1">3</div>
    </div>
  );
};

export default ProfilePages;
