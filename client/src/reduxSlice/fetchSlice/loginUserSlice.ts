import {  createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createAxios } from "../../apiFetch/createAxios";



export const loginUserPost = createAsyncThunk('postData', async (loginData:any) => {
  const response = await createAxios().post("/api/auth/login", loginData)
 
  return response.data;
});



const initialState= {
   userInformation: []
}
    


export const loginUsers = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
      builder.addCase(loginUserPost.fulfilled, (state,action) => {
          state.userInformation = action.payload;
      })
  },
});


export default loginUsers.reducer