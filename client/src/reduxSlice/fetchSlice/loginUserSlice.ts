import {  createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAxios } from "../../apiFetch/createAxios";



export const loginUserPost = createAsyncThunk('postData', async (a:any) => {
  const response = await createAxios().post("/api/auth/login", a.loginData).then(res => {
      if(res.status === 200) {
        a.navigate("/")
        return res
      }
  })
 
  return response?.data;
});



const initialState: any= {
  userInformation: false,
};
    

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