import { useContext } from "react";
import QuestionsCont from "../components/question";
import { fakeData } from "../data";
import AuthContext from "../context/authContext";

const Questions: React.FC = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="p-6 w-full h-screen flex flex-col flex-nowrap items-center overflow-auto bg-gray-900">
      <div className="flex w-full mb-4 justify-between">
        <div className="text-white text-3xl">Sorular</div>{" "}
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold  py-2 px-4 rounded">
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
