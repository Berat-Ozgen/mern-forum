
import { createAxios } from "./createAxios";


export const createAnswes = async(AnswesData:any) => {
  return  await createAxios()
    .post("/api/questionAnswers/create-questionAnswers", AnswesData)
    
}