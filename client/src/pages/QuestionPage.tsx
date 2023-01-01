import axios from "axios";
import { useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import AskQuestionInput from "../components/askquestioninput/AskQuestionInput";
import QuestionsCont from "../components/question";
import QuestionComments from "../components/questionComments/QuestionComments";

const QuestionPage: React.FC = (): JSX.Element => {
  const paramas = useParams();

  const handlePagePost = () => {
    console.log("deneme");
  };

  const deneme = () => {
    console.log("deneme");
  };

  const singleQuestion = async (paramas: Params) => {
    await axios
      .get(`http://localhost:8000/api/questions/get-singlepost/${paramas}`)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    singleQuestion(paramas.id as any);
  }, []);

  return (
    <div className="bg-gray-900 flex flex-col items-center justify-evenly  w-full text-gray-400">
      <div className="w-full flex flex-[1] flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center text-4xl">
          Soru
        </div>
        <div className="w-full flex items-center justify-center text-4xl">
          <QuestionsCont
            handlePagePost={handlePagePost}
            key={"2"}
            userId={"213"}
            handleDelete={deneme}
            id={"12"}
            img={"ds"}
            name={"berat"}
            question={"kşfdkpfdspkı"}
          />
        </div>
      </div>
      <div className="w-full flex flex-col flex-[4] ">
        <div className="w-full text-5xl flex mt-3 flex-[1] justify-center ">
          Yorumlar
        </div>
        <div className="w-full p-3 flex flex-col flex-[4]">
          <div className="flex  flex-[9]">
            <QuestionComments />
          </div>
          <div className="flex flex-[1] w-full">
            <AskQuestionInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
