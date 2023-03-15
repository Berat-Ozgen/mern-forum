import { AiFillEdit, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import {
  BsFillExclamationDiamondFill,
  BsFillTrash2Fill,
  BsThreeDots,
} from "react-icons/bs";
import { IQuestionProps } from "../../models/Question";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reduxHooks/storeHook";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../UsefulFunctions/capitalizeFirstLetter";
import { questionLikesFetch } from "../../reduxSlice/fetchSlice/questionLikesSlice";
import { likeAndDisLikeData } from "../../models/likeData.models";
import { questionDisLikesFetch } from "../../reduxSlice/fetchSlice/questionDisLikeSlice";

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
  const [postFeatures, setPostFeatures] = useState<boolean>(false);
  const { userInformation } = useAppSelector((state) => state.usersData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const likeAndDisLikeData: likeAndDisLikeData = {
    userId: userInformation?._id as string,
    questionId: id,
  };

  // soruya like atmak için
  const handleLike = () => {
    dispatch(questionLikesFetch(likeAndDisLikeData));
  };

  // soruya dislike atmak için
  const handleDisLike = () => {
    dispatch(questionDisLikesFetch(likeAndDisLikeData));
  };

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
        <BsThreeDots
          size="30"
          color="white"
          onClick={() => setPostFeatures(!postFeatures)}
        />
        {postFeatures && (
          <div className="absolute bg-neutral-600 flex flex-col justify-around  right-[-45px] w-32 h-28 border">
            {userInformation?._id === userId && (
              <div>
                <div
                  onClick={() => handleDelete(id)}
                  className="text-base w-full hover:bg-slate-800 cursor-pointer  flex justify-evenly items-center"
                >
                  <span>Postu Sil</span>
                  <span>
                    <BsFillTrash2Fill />
                  </span>
                </div>
                <div className="text-base w-full hover:bg-slate-800 cursor-pointer flex justify-evenly items-center">
                  <span>Düzenle</span>
                  <span>
                    <AiFillEdit />
                  </span>
                </div>
              </div>
            )}

            <div className="text-base w-full  flex hover:bg-slate-800 cursor-pointer justify-evenly items-center">
              <span>Şikayet et</span>
              <span>
                <BsFillExclamationDiamondFill />
              </span>
            </div>
          </div>
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
        <div className="text-green-300">
          {capitalizeFirstLetter(name as string)}
        </div>
      </div>
      <div className="flex flex-[8] h-full justify-center items-center">
        <span className="text-xl text-red-400">{question}</span>
      </div>
      <div className="flex items-center justify-evenly flex-[1]">
        <div className="text-green-900 cursor-pointer" onClick={handleLike}>
          <AiOutlineLike size={25} />
        </div>
        <div className="text-red-900 cursor-pointer">
          <AiOutlineDislike size={25} onClick={handleDisLike} />
        </div>
      </div>
    </div>
  );
};

export default QuestionsCont;
