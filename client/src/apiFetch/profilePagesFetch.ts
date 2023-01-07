
import { createAxios } from "./createAxios";


// bu fonksiyon profil pagesta kullanıcıyı getirme işlemini yapıyor
export const apiGetAUsers = async (username:string):Promise<any> => {
    return await createAxios()  
    .get(`/api/users/get-user?username=${username}`)
}

// kullanıcın postlarını getirir
export const apiGetAUsersPosts = async (username:string):Promise<any> => {
   return await createAxios()
    .get(
        `/api/questions/get-usersposts?username=${username}`
      )
}


interface deletePost {
    userId: string;
}

// bu fonksiyon profile pages sayfasında kullanıcın postlarını siler
export const apiDeleteAPost = async (deletePost:deletePost, id:string):Promise<any> => {
    return await createAxios()
    .delete(`/api/questions/delete-post/${id}`, {
        data: {
         deletePost
        },
      })
}