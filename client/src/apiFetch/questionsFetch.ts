import { createAxios } from "./createAxios";

export const allQuestionsFecthData = () => {
    return createAxios()
          .get("http://localhost:8000/api/questions/get-all-questions")
}


interface IDeletedPost {
    userId:string
}

export const handleDeleteFecthData = (id:string, deletePost:IDeletedPost) => {
    return createAxios().delete(`http://localhost:8000/api/questions/delete-post/${id}`, {
        data: {
          deletePost,
        },
      })
}

