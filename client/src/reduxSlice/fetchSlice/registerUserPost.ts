
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { registerFechtPost } from "../../apiFetch/registerFetch";
import { IRegisterPost } from "../../models/Register.models";

interface IA {
  registerPost: IRegisterPost
  navigate: NavigateFunction;
  }

export const registerUserPost = createAsyncThunk("registerUser", async (a:IA) => {
  const response = await registerFechtPost(a.registerPost).then((res) => {
    if(res.status === 200) {
        a.navigate("/login");
        return res
    } else {
        console.log("hata oluştu",res.status);
    }
 })

 return response?.data;
});

// await registerFechtPost(registerPost).then((res) => {
//     if (res.status === 200) {
//       navigate("/login");
//     }
//   });

const initialState = {
    postUsersGetData: []
}

export const loginUsers = createSlice({
    name: "users",
    initialState,
    reducers: {
     
    },
    extraReducers(builder) {
        builder.addCase(registerUserPost.fulfilled, (state,action) => {
          // state.postUsersGetData = action.payload
        })
    },
  });
  
  export default loginUsers.reducer