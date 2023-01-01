import axios from "axios";
import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import AskQuestionInput from "../components/askquestioninput/AskQuestionInput";
import QuestionsCont from "../components/question";
import QuestionComments from "../components/questionComments/QuestionComments";

interface ISinglePost {
  createdAt: string;
  des: string;
  updatedAt: string;
  userId: string;
  username?: string;
  __v?: number;
  _id?: string;
}

const QuestionPage: React.FC = (): JSX.Element => {
  const paramas = useParams();

  const [singleQuestionState, setSingleQuestionState] = useState<ISinglePost>();

  // const [questionAnswersState, setQuestionAnswersState] = useState([]);

  const deneme = () => {
    console.log("deneme");
  };

  const createQuestionAnswers = async () => {
    await axios.post;
  };

  const singleQuestion = async (paramas: Params): Promise<void> => {
    await axios
      .get(`http://localhost:8000/api/questions/get-singlepost/${paramas}`)
      .then((res) => setSingleQuestionState(res.data));
  };

  console.log(singleQuestionState);

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
            userId={singleQuestionState?.userId as string}
            handleDelete={deneme}
            id={singleQuestionState?._id as string}
            img={"https://picsum.photos/200/305"}
            name={singleQuestionState?.username as string}
            question={singleQuestionState?.des as string}
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
