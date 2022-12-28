import axios from "axios";
import { useEffect, useContext, useState } from "react";
import QuestionsCont from "../components/question";
import AuthContext from "../context/authContext";

const ProfilePages: React.FC = (): JSX.Element => {
  const [aUsers, setAUsers] = useState<any>();

  const { user } = useContext(AuthContext);

  const getAUsers = async () => {
    await axios
      .get(`http://localhost:8000/api/users/get-user?username=${user.username}`)
      .then((res) => {
        setAUsers(res.data);
      });
  };

  useEffect(() => {
    getAUsers();
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
        <QuestionsCont
          key={1}
          name={"berat"}
          img={"https://picsum.photos/200/305"}
          question={"bu bir deneme yazısıdır 6"}
        />
        <QuestionsCont
          key={2}
          name={"berat"}
          img={"https://picsum.photos/200/305"}
          question={"bu bir deneme yazısıdır 6"}
        />
      </div>
      <div className="flex flex-1">3</div>
    </div>
  );
};

export default ProfilePages;
