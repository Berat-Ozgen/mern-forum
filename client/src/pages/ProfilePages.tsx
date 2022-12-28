import axios from "axios";
import { useEffect, useContext, useState } from "react";
import QuestionsCont from "../components/question";
import AuthContext from "../context/authContext";

const ProfilePages: React.FC = (): JSX.Element => {
  const [aUsers, setAUsers] = useState<any>();
  const [usersPosts, setUsersPosts] = useState<any>();

  const { user } = useContext(AuthContext);

  const getAUsers = async () => {
    await axios
      .get(`http://localhost:8000/api/users/get-user?username=${user.username}`)
      .then((res) => {
        setAUsers(res.data);
      });
  };

  const getAUsersPosts = async () => {
    await axios
      .get(
        `http://localhost:8000/api/questions/get-usersposts?username=${user.username}`
      )
      .then((res) => {
        setUsersPosts(res.data);
      });
  };

  useEffect(() => {
    getAUsers();
    getAUsersPosts();
  }, []);

  console.log(usersPosts);

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
