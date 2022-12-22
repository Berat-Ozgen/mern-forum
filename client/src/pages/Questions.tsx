import React from "react";
import QuestionsCont from "../components/question";
import { fakeData } from "../data";

const Questions = () => {
  return (
    <div className="p-6 w-full h-[1000px] flex flex-col flex-nowrap items-center overflow-auto">
      <div className="flex w-full mb-4 justify-between">
        <div>Sorular</div>{" "}
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
          Soru sor
        </button>
      </div>
      {fakeData?.map((item) => (
        <QuestionsCont
          name={item.name}
          img={item.img}
          question={item.question}
        />
      ))}
    </div>
  );
};

export default Questions;
