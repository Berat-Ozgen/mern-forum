import { editDataI } from "../models/editDataI.models";
import { createAxios } from "./createAxios";

export const editProfile = async (editData: editDataI, id: string) => {
  console.log(editData) 
  return await createAxios().put(`/api/users/users-edit/${id}`, editData);

};
