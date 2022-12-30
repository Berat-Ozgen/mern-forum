import { useContext, useState } from "react";
import Axios from "axios";
import AuthContext from "../../context/authContext";

type AskQuestionProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

interface QuestionsPost {
  userId: string;
  username: string;
  des: string;
}

const AskQuestion: React.FC<AskQuestionProps> = ({ setModal }): JSX.Element => {
  const [des, setDes] = useState("" as string);
  const { user, setUser } = useContext(AuthContext);

  const quesPost: QuestionsPost = {
    userId: user._id,
    username: user.username,
    des: des,
  };

  const handleQuestion = async (): Promise<void> => {
    await Axios.post(
      "http://localhost:8000/api/questions/create-questions",
      quesPost
    )
      .then((res) => console.log(res))
      .finally(() => setModal(false as boolean));
  };

  return (
    <div className="absolute top-1/2 left-1/2 flex flex-col z-10  transform -translate-x-1/2 -translate-y-1/2 w-2/4 h-2/4 bg-slate-800">
      <div className="flex flex-1 text-6xl font-light items-center justify-center text-yellow-50">
        Soru Sor
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="mb-6 w-3/4 flex ">
          <div className="flex-[3] mr-2">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setDes(e.target.value as string)
              }
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   w-full p-2.5 dark:bg-gray-700 outline-none dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="flex-[1]">
            <button
              onClick={handleQuestion}
              type="button"
              className="w-full h-full items-center justify-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-100 hover:bg-gray-100     dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Soruyu gonder
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 text-6xl w-full  items-center justify-center">
        <button
          onClick={() => setModal(false as boolean)}
          type="button"
          className="py-2.5 w-40 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-red-700 rounded-lg  hover:bg-red-600  focus:z-10 "
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default AskQuestion;
