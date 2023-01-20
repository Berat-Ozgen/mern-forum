
import { createAxios } from "./createAxios";

// bir postun yorumunu silme
export const deleteAnwersPost = async (id:string,deletePost:any):Promise<any> => {
    return await createAxios()  
    .delete(`/post-anwers-delete/${id}`,{
        data:{
            deletePost
        }
    })
}