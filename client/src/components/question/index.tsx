import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

interface Iprops {
  name: string;
  img: string;
  question: string;
}

const QuestionsCont = ({ name, img, question }: Iprops) => {
  return (
    <div className="flex h-20 w-4/5 items-center m-6 border">
      <div className="flex flex-col items-center  flex-[1]">
        <div>
          <img className="w-10 h-10 rounded-full" src={img} />
        </div>
        <div className="text-green-300">{name}</div>
      </div>
      <div className="flex flex-[8] h-full justify-center  items-center">
        <span className="text-xl text-red-400">{question}</span>
      </div>
      <div className="flex justify-evenly flex-[1]">
        <div className="text-green-900">
          <AiOutlineLike />
        </div>
        <div className="text-red-900">
          <AiOutlineDislike />
        </div>
      </div>
    </div>
  );
};

export default QuestionsCont;
