import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const QuestionComments: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full border border-slate-500  h-48">
      <div className="flex flex-[1] justify-center items-center text-4xl">
        Berat
      </div>
      <div className="flex flex-[4] pl-6 ">
        <div className="text-xl  flex-[9]">
          bu sorunu şoyle yaparak çözbilirsin
        </div>
        <div className=" flex justify-evenly items-center  h-full flex-[1]">
          <div className="flex items-center justify-center w-full h-full">
            <AiOutlineLike size={30 as number} color={"green" as string} />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <AiOutlineDislike size={30 as number} color={"#d32f2f" as string} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComments;
