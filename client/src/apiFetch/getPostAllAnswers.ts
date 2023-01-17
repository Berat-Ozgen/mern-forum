import { createAxios } from "./createAxios";


export const getAnswersFetch = async(postId: string) => {
  return  await createAxios()
    .get(`/api/questionAnswers/post-anwers/${postId}`)
    
}