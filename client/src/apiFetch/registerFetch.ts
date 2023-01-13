import { IRegisterPost } from "../models/Register.models"
import {createAxios} from "./createAxios"

export const registerFechtPost = async(registerPost:IRegisterPost) => {
  return await createAxios().post("/api/auth/register",registerPost)
}   