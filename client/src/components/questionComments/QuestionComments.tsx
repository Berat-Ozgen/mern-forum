import { FC } from "react";
import { AiFillDelete, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useAppSelector } from "../../reduxHooks/storeHook";

interface IProps {
  id: string;
  key: number;
  username: string;
  des: string;
  createdAt: string;
  updatedAt: string;
  deleteAnwersPost(id: string): void;
}

const QuestionComments: FC<IProps> = ({
  key,
  username,
  createdAt,
  des,
  updatedAt,
  deleteAnwersPost,
  id,
}): JSX.Element => {
  const { userInformation } = useAppSelector((state) => state.usersData);

  return (
    <div className="flex flex-col w-[85%] border border-slate-500  h-40">
      <div className="flex flex-[1] justify-center items-center text-4xl">
        {username}
      </div>
      <div className="flex flex-[4] pl-6 ">
        <div className="text-xl  flex-[9]">{des}</div>
        <div className=" flex justify-evenly items-center  h-full flex-[1]">
          <div className="flex items-center justify-center w-full h-full">
            <AiOutlineLike size={30 as number} color={"green" as string} />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <AiOutlineDislike size={30 as number} color={"#d32f2f" as string} />
          </div>
          {userInformation?.username === username && (
            <div
              className="flex items-center justify-center w-full h-full"
              onClick={() => deleteAnwersPost(id as string)}
            >
              <AiFillDelete size={28} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionComments;
