import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IQuestionProps } from "../../models/Question";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reduxHooks/storeHook";

const QuestionsCont: React.FC<IQuestionProps> = ({
  name,
  img,
  question,
  userId,
  id,
  handleDelete,
  handlePagePost,
  handleOrientationUsers,
}): JSX.Element => {
  const { userInformation } = useAppSelector((state) => state.usersData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        if (handlePagePost) {
          handlePagePost(id);
        }
      }}
      className="relative flex items-center m-6 outline-hidden border border-cyan-700 w-full  md:w-4/5 lg:w-4/4 xl:w-3/3 h-32"
    >
      <div className="absolute left-[96%] top-1">
        {userInformation?._id === userId && (
          <BsThreeDots
            onClick={() => handleDelete(id)}
            size={30}
            color={"silver"}
          />
        )}
      </div>
      <div className="flex h-full justify-center flex-col items-center md:flex-col  md:items-center flex-[1]">
        <div>
          <img
            className="w-10 h-10 rounded-full"
            src={img}
            alt="profileImage"
            onClick={() => {
              if (handleOrientationUsers) {
                handleOrientationUsers(name!);
              }
            }}
          />
        </div>
        <div className="text-green-300">{name}</div>
      </div>
      <div className="flex flex-[8] h-full justify-center items-center">
        <span className="text-xl text-red-400">{question}</span>
      </div>
      <div className="flex items-center justify-evenly flex-[1]">
        <div className="text-green-900 cursor-pointer">
          <AiOutlineLike size={25} />
        </div>
        <div className="text-red-900 cursor-pointer">
          <AiOutlineDislike size={25} />
        </div>
      </div>
    </div>
  );
};

export default QuestionsCont;
