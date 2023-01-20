import { FC, useState } from "react";
import { AnswersData } from "../../models/anwersData.model";
import { useAppSelector } from "../../reduxHooks/storeHook";

interface IProps {
  createQuestionAnswers: (anwersData: AnswersData) => void;

  postId: string;
}

const AskQuestionInput: FC<IProps> = ({
  createQuestionAnswers,
  postId,
}): JSX.Element => {
  const { userInformation } = useAppSelector((state) => state.usersData);
  const [commentInputValue, setCommentInputValue] = useState("" as string);

  const anwersData: AnswersData = {
    postId: postId,
    username: userInformation?.username,
    des: commentInputValue,
  };

  return (
    <div className="flex flex-row justify-evenly  items-center  w-full h-full p-3">
      <div className="w-11/12">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCommentInputValue(e.target.value);
          }}
          value={commentInputValue}
          className="w-full h-full px-3 py-3  text-slate-200  bg-gray-800 rounded text-sm border border-slate-600 outline-none "
        />
      </div>
      <div className="mt-1">
        <button
          onClick={() => {
            createQuestionAnswers(anwersData);
            setCommentInputValue("");
          }}
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

export default AskQuestionInput;
