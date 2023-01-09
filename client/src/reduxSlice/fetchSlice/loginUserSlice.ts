import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createAxios } from "../../apiFetch/createAxios";

export const LoginUsersPost = createAsyncThunk(
  "users/postLoginUsers",
  async (data, thunkApi) => {
    try {
      const res = await axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((json) => console.log(json));
    } catch (error) {
      console.log("try catch error");
    }
  }
);

interface userDenemeBilgi {
  userId: number | null;
  id: number | null;
  title: string | null;
  completed: boolean | null;
}

const initialState= {
    usersData:{
     userId: null,
    id: null,
    title: null,
    completed: null,
    }
}
    


export const loginUsers = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
      builder.addCase(LoginUsersPost.fulfilled, (state,action:any) => {
          state.usersData = action.payload;
      })
  },
});


export default loginUsers.reducer