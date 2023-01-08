import { useEffect, useState, useContext } from "react";
import { Params, useParams } from "react-router-dom";
import {
  questionPageHandleDeletedFetchApi,
  singleQuestionFetchApi,
} from "../apiFetch/questionPageFetch";
import AskQuestionInput from "../components/askquestioninput/AskQuestionInput";
import QuestionsCont from "../components/question";
import QuestionComments from "../components/questionComments/QuestionComments";
import AuthContext from "../context/authContext";
import { ISinglePost } from "../models/QuestionPage.models";

const QuestionPage: React.FC = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const paramas = useParams();

  const [singleQuestionState, setSingleQuestionState] = useState<ISinglePost>();

  // const [questionAnswersState, setQuestionAnswersState] = useState([]);

  const deletePost: {
    userId: string;
  } = {
    userId: user._id,
  };

  const questionPageHandleDeleted = (id: string): void => {
    questionPageHandleDeletedFetchApi(id, deletePost).then((res) => {
      if (res.status !== 200) alert("silme işlemi başarısız !");
    });
  };

  const singleQuestion = async (paramas: Params): Promise<void> => {
    await singleQuestionFetchApi(paramas).then((res) => {
      setSingleQuestionState(res.data);
    });
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
            handleDelete={questionPageHandleDeleted}
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
