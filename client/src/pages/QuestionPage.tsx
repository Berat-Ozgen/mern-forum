import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AskQuestionInput from "../components/askquestioninput/AskQuestionInput";
import QuestionsCont from "../components/question";
import QuestionComments from "../components/questionComments/QuestionComments";
import { useAppSelector, useAppDispatch } from "../reduxHooks/storeHook";
import { handleDeletedPost } from "../reduxSlice/fetchSlice/postDeletedSlice";
import { singleQuestion } from "../reduxSlice/fetchSlice/QuestionPageSlice";

const QuestionPage: React.FC = (): JSX.Element => {
  const paramas = useParams();
  const { userInformation } = useAppSelector((state) => state.usersData);
  const { singleQuestionData } = useAppSelector(
    (state) => state.QuestionPageSlice
  );

  const dispatch = useAppDispatch();

  const deletePost = {
    userId: userInformation?._id as string,
  };

  const questionPageDeleted = (id: string) => {
    dispatch(handleDeletedPost({ id, deletePost }));
  };

  useEffect(() => {
    dispatch(singleQuestion(paramas.id as any));
  }, []);

  return (
    <div className="bg-gray-900 flex flex-col items-center justify-evenly  w-full text-gray-400">
      <div className="w-full flex flex-[1] flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center text-4xl">
          Soru
        </div>
        <div className="w-full flex items-center justify-center text-4xl">
          <QuestionsCont
            userId={singleQuestionData?.userId as string}
            handleDelete={questionPageDeleted}
            id={singleQuestionData?._id as string}
            img={"https://picsum.photos/200/305"}
            name={singleQuestionData?.username as string}
            question={singleQuestionData?.des as string}
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
