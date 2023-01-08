import { useContext, useEffect, useState } from "react";
import QuestionsCont from "../components/question";
import AuthContext from "../context/authContext";
import AskQuestion from "../components/askquestion/AskQuestion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IRecord } from "../models/Questions.models";
import {
  allQuestionsFecthData,
  handleDeleteFecthData,
} from "../apiFetch/questionsFetch";

const Questions: React.FC = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const [modal, setModal] = useState<boolean>(false);
  const [questions, setQuestions] = useState<IRecord[]>([]);
  const navigate = useNavigate();

  const allQuestions = async (): Promise<void> => {
    await allQuestionsFecthData().then((res) => setQuestions(res.data));
  };

  useEffect(() => {
    allQuestions();
  }, []);

  const deletePost: {
    userId: string;
  } = {
    userId: user._id,
  };

  const handleDelete = async (id: string) => {
    await axios;
    handleDeleteFecthData(id, deletePost).then((res) => {
      res.status === 200 && window.location.reload();
    });
  };

  const handlePagePost = (id: string) => {
    navigate(`questionpage/${id}`);
    console.log(id);
  };

  return (
    <div className="p-6   w-full h-screen flex flex-col flex-nowrap items-center overflow-auto bg-gray-900">
      <div className="flex w-full  mb-4 justify-between">
        <div className="text-white text-3xl">Sorular</div>{" "}
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => setModal(true as boolean)}
        >
          Soru Sor
        </button>
        {modal && <AskQuestion setModal={setModal} />}
      </div>
      <div className="w-full h-full outline-hidden">
        {questions?.map((item) => (
          <QuestionsCont
            handlePagePost={handlePagePost}
            handleDelete={handleDelete}
            id={item._id}
            userId={item.userId}
            name={item.username}
            key={item.createdAt}
            img={item.img || "https://picsum.photos/id/237/200/300"}
            question={item.des}
          />
        ))}
      </div>
    </div>
  );
};
// /api/questions
export default Questions;
