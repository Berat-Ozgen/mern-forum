import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const QuestionComments: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full border border-slate-500  h-52">
      <div className="flex flex-[1] justify-center items-center text-4xl">
        Berat
      </div>
      <div className="flex flex-[4] p-6">
        <div className="text-xl  flex-[9]">
          bu sorunu şoyle yaparak çözbilirsin
        </div>
        <div className=" flex justify-evenly items-center flex-[1]">
          <div>
            <AiOutlineLike size={35} color={"green"} />
          </div>
          <div>
            <AiOutlineDislike size={35} color={"red"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComments;
