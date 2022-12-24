import React from "react";
import QuestionsCont from "../components/question";

const ProfilePages: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-1 flex-col justify-evenly items-center">
        <div>
          <img
            className="w-36 h-36 rounded"
            src="https://picsum.photos/200/305"
            alt="Default avatar"
          />
        </div>
        <div className="text-green-200 text-4xl">Berat Özgen</div>
        <div className="text-green-200 text-lg">
          Türkiyede yaşıyorum javascirpt react typescript ile ugraşıyorum
        </div>
      </div>
      <div className="flex flex-1 flex-col  items-center  justify-evenly">
        <QuestionsCont
          name={"berat"}
          img={"https://picsum.photos/200/305"}
          question={"bu bir deneme yazısıdır 6"}
        />
        <QuestionsCont
          name={"berat"}
          img={"https://picsum.photos/200/305"}
          question={"bu bir deneme yazısıdır 6"}
        />
      </div>
      <div className="flex flex-1">3</div>
    </div>
  );
};

export default ProfilePages;
