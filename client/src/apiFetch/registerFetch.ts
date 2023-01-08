import { IRegisterPost } from "../models/Register.models"
import {createAxios} from "./createAxios"

export const registerFechtPost = (registerPost:IRegisterPost) => {
  return createAxios().post("/api/auth/register",registerPost)
}   