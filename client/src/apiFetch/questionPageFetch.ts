
import { createAxios } from "./createAxios";
import {Params} from "react-router-dom";

export const singleQuestionFetchApi = (paramas:Params) => {
    return createAxios()
    .get(`/api/questions/get-singlepost/${paramas}`)
}


interface IDeletePost {
    userId: string;
}
export const questionPageHandleDeletedFetchApi = (id:string, deletePost:IDeletePost) => {
    return createAxios().delete(`/api/questions/delete-post/${id}`, {
        data: {
         deletePost
        },
      })
}