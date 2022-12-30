import { useContext, useEffect, useState } from "react";
import QuestionsCont from "../components/question";
import { fakeData } from "../data";
import AuthContext from "../context/authContext";
import AskQuestion from "../components/askquestion/AskQuestion";
import axios from "axios";

const Questions: React.FC = (): JSX.Element => {
  const { user, setUser } = useContext(AuthContext);
  const [modal, setModal] = useState<boolean>(false);
  const [questions, setQuestions] = useState<any[]>([]);

  const allQuestions = async () => {
    await axios
      .get("http://localhost:8000/api/questions/get-all-questions")
      .then((res) => setQuestions(res.data));
  };

  useEffect(() => {
    allQuestions();
  }, []);

  return (
    <div className="p-6 w-full h-screen flex flex-col flex-nowrap items-center overflow-auto bg-gray-900">
      <div className="flex w-full mb-4 justify-between">
        <div className="text-white text-3xl">Sorular</div>{" "}
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => setModal(true)}
        >
          Soru Sor
        </button>
        {modal && <AskQuestion setModal={setModal} />}
      </div>
      {questions?.map((item) => (
        <QuestionsCont
          id={item.userId}
          name={item.username}
          key={item.createdAt}
          img={item.img || "https://picsum.photos/id/237/200/300"}
          question={item.des}
        />
      ))}
    </div>
  );
};

export default Questions;
