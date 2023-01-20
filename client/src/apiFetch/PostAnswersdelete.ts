
import { createAxios } from "./createAxios";

// bir postun yorumunu silme
export const deleteAnwersPost = async (id:string,deleteAnwers:any):Promise<any> => {
    return await createAxios()  
    .delete(`/api/questionAnswers/post-anwers-delete/${id}`,{
        data:{
            deleteAnwers
        }
    })
}