import { useContext } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import AuthContext from "../../context/authContext";

interface Iprops {
  name: string;
  img: string;
  question: string;
  id: string;
}

const QuestionsCont: React.FC<Iprops> = ({
  name,
  img,
  question,
  id,
}): JSX.Element => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="relative flex items-center m-6 border border-cyan-700 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-32">
      <div className="absolute left-[96%] top-1">
        {user._id === id && <BsThreeDots size={30} color={"silver"} />}
      </div>
      <div className="flex h-full   justify-center flex-col items-center md:flex-col  md:items-center flex-[1]">
        <div>
          <img className="w-10 h-10 rounded-full" src={img} />
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
