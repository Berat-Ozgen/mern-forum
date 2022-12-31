import axios from "axios";
import { useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import QuestionsCont from "../components/question";

const QuestionPage = () => {
  const paramas = useParams();

  const handlePagePost = () => {
    console.log("deneme");
  };

  const deneme = () => {
    console.log("deneme");
  };

  const singleQuestion = async (paramas: Params) => {
    await axios
      .get(`http://localhost:8000/api/questions/get-singlepost/${paramas}`)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    singleQuestion(paramas.id as any);
  }, []);

  return (
    <div className="bg-gray-900 flex  justify-center w-full text-gray-400">
      <QuestionsCont
        handlePagePost={handlePagePost}
        key={"2"}
        userId={"213"}
        handleDelete={deneme}
        id={"12"}
        img={"ds"}
        name={"berat"}
        question={"kşfdkpfdspkı"}
      />
    </div>
  );
};

export default QuestionPage;
