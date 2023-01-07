import { LoginData } from "../models/Login.models";
import { createAxios } from "./createAxios";


export const loginPost = async(loginData:LoginData) => {
  return  await createAxios()
    .post("/api/auth/login", loginData)
    
}