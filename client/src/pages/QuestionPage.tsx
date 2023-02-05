import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AskQuestionInput from "../components/askquestioninput/AskQuestionInput";
import QuestionsCont from "../components/question";
import QuestionComments from "../components/questionComments/QuestionComments";
import { AnswersData } from "../models/anwersData.model";
import { useAppSelector, useAppDispatch } from "../reduxHooks/storeHook";
import { postAnwersDeletedApi } from "../reduxSlice/fetchSlice/postAnwersDeleted";
import { handleDeletedPost } from "../reduxSlice/fetchSlice/postDeletedSlice";
import { getPostAnswers } from "../reduxSlice/fetchSlice/postGetAnswers";
import { createAnswersQues } from "../reduxSlice/fetchSlice/QuestionAnswersCreate";
import { singleQuestion } from "../reduxSlice/fetchSlice/QuestionPageSlice";

const QuestionPage: React.FC = (): JSX.Element => {
  const paramas = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { userInformation } = useAppSelector((state) => state.usersData);
  const { singleQuestionData } = useAppSelector(
    (state) => state.QuestionPageSlice
  );
  const { postAnswersData } = useAppSelector(
    (state) => state.postGetAnswersSlice
  );

  console.log(singleQuestionData);

  const deletePost = {
    userId: userInformation?._id as string,
  };
  const questionPageDeleted = (id: string) => {
    dispatch(handleDeletedPost({ id, deletePost }));
  };

  const handleOrientationUsers = (username: string) => {
    navigate(`/profile/${username}`);
  };

  const createQuestionAnswers = (anwersData: AnswersData) => {
    dispatch(createAnswersQues(anwersData));
  };

  const deleteAnwers = {
    userId: userInformation?._id as string,
  };
  const deleteAnwersPost = (id: string) => {
    dispatch(postAnwersDeletedApi({ id, deleteAnwers }));
  };

  useEffect(() => {
    dispatch(singleQuestion(paramas.id as any));
  }, []);

  useEffect(() => {
    dispatch(getPostAnswers(paramas.id as string));
  }, []);

  return (
    <div className="bg-gray-900 flex flex-col items-center justify-evenly overflow-hidden  w-full text-gray-400">
      <div className="w-full flex flex-[1] flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center text-4xl">
          Soru
        </div>
        <div className="w-full flex items-center justify-center text-4xl">
          <QuestionsCont
            userId={singleQuestionData?.userId as string}
            handleOrientationUsers={handleOrientationUsers}
            handleDelete={questionPageDeleted}
            id={singleQuestionData?._id as string}
            img={"https://picsum.photos/200/305"}
            name={singleQuestionData?.username as string}
            question={singleQuestionData?.des as string}
          />
        </div>
      </div>
      <div className="w-full flex flex-col flex-[4] overflow-hidden">
        <div className="w-full text-5xl flex mt-3 flex-[1] justify-center ">
          Yorumlar
        </div>
        <div className="w-full p-3 flex flex-col  flex-[4]">
          <div className="flex flex-col  items-center gap-8 flex-[9]">
            {postAnswersData?.map((data, i) => (
              <QuestionComments
                id={data?._id}
                key={i}
                username={data?.username}
                des={data?.des}
                createdAt={data?.createdAt}
                updatedAt={data?.updatedAt}
                deleteAnwersPost={deleteAnwersPost}
              />
            ))}
          </div>
          <div className="flex flex-[1] w-full">
            <AskQuestionInput
              createQuestionAnswers={createQuestionAnswers}
              postId={singleQuestionData._id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
