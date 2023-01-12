import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { registerFechtPost } from "../../apiFetch/registerFetch";

export const registerUser = createAsyncThunk("registerUser", async (a:any) => {
  const response = await registerFechtPost(a.registerPost).then((res) => {
    if(res.status === 200) {
        a.navigate("/login");
        console.log("asddsa")
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
        builder.addCase(registerUser.fulfilled, (state,action) => {
          state.postUsersGetData = action.payload
        })
    },
  });
  
  export const {} = loginUsers.actions
  export default loginUsers.reducer