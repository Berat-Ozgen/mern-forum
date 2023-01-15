
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetSelfUsersPosts } from "../../apiFetch/profilePagesFetch";
import { IUsersPost } from "../../models/ProfilePages.models";






  
  export const getSelfUsersPost = createAsyncThunk("getSelfUsersPost",async (username:string) => {
    const response = await apiGetSelfUsersPosts(username).then((res) => {
      if (res.status === 200) {
        return res
      } else {
      }
    });

    return response?.data;
  })
  




const initialState = {
    getSelfPostData: [] as IUsersPost[]
};

export const getSelfPosts = createSlice({
    name: "getSelfPost",
    initialState,
    reducers: {
     
    },
    extraReducers(builder) {
        builder.addCase(getSelfUsersPost.fulfilled, (state,action) => {
          state.getSelfPostData = action.payload
        })
    },
  });
  

  export default getSelfPosts.reducer