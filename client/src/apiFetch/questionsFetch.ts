import { createAxios } from "./createAxios";

export const allQuestionsFecthData = () => {
    return createAxios()
          .get("/api/questions/get-all-questions")
}


interface IDeletedPost {
    userId:string
}

export const handleDeleteFecthData = (id:string, deletePost:IDeletedPost) => {
    return createAxios().delete(`/api/questions/delete-post/${id}`, {
        data: {
          deletePost,
        },
      })
}

