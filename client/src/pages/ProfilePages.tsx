import { useEffect, useState } from "react";
import {
  apiDeleteAPost,
  apiGetAUsers,
  apiGetAUsersPosts,
} from "../apiFetch/profilePagesFetch";
import QuestionsCont from "../components/question";
import { IUsersPost, User } from "../models/ProfilePages.models";
import { useAppDispatch, useAppSelector } from "../reduxHooks/storeHook";

const ProfilePages: React.FC = (): JSX.Element => {
  const { userInformation } = useAppSelector((state) => state.usersData);
  const dispatch = useAppDispatch();
  const [aUsers, setAUsers] = useState<User>();
  const [usersPosts, setUsersPosts] = useState<IUsersPost[]>([]);

  const getAUsers = async (): Promise<void> => {
    apiGetAUsers(userInformation?.username as string).then((res) => {
      setAUsers(res.data);
    });
  };

  const getAUsersPosts = async (): Promise<void> => {
    apiGetAUsersPosts(userInformation?.username as string).then((res) => {
      setUsersPosts(res.data);
    });
  };

  const deletePost: {
    userId: string;
  } = {
    userId: userInformation?._id as string,
  };

  const handleDelete = async (id: string) => {
    apiDeleteAPost(deletePost, id).then((res) => {
      res.status === 200 ? window.location.reload() : alert("başarısız oldu");
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
