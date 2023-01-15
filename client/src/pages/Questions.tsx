import { useEffect, useState } from "react";
import QuestionsCont from "../components/question";
import AskQuestion from "../components/askquestion/AskQuestion";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../reduxHooks/storeHook";
import { handleDeletedPost } from "../reduxSlice/fetchSlice/postDeletedSlice";
import { getAllQuestionsPost } from "../reduxSlice/fetchSlice/allQuestions";

const Questions: React.FC = (): JSX.Element => {
  const { userInformation } = useAppSelector((state) => state.usersData);
  const { allQuestions } = useAppSelector((state) => state.allQuestionsSlice);

  const dispatch = useAppDispatch();
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const deletePost = {
    userId: userInformation?._id as string,
  };

  const handleDelete = async (id: string) => {
    dispatch(handleDeletedPost({ id, deletePost }));
  };

  const handlePagePost = (id: string) => {
    navigate(`questionpage/${id}`);
  };

  useEffect(() => {
    dispatch(getAllQuestionsPost());
  }, []);

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
        {allQuestions?.map((item) => (
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
