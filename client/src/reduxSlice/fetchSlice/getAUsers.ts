
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetAUsers } from "../../apiFetch/profilePagesFetch";






  
  export const getAUsersPage = createAsyncThunk("getAUsersPage",async (username:string) => {
    const response = await apiGetAUsers(username).then((res) => {
      if (res.status === 200) {
        return res
      }
    });

    return response?.data;
  })
  


  interface IInitialState {
    getAUsersPageData: {
        _id?: string;
        username?: string;
        email?: string;
        password?: string;
        images?: string;
        createdAt?: string;
        updatedAt?: string;
        __v?: number;
    }
}

const initialState:IInitialState = {
    getAUsersPageData: {}
};

export const getAUsers = createSlice({
    name: "getAUsers",
    initialState,
    reducers: {
     
    },
    extraReducers(builder) {
        builder.addCase(getAUsersPage.fulfilled, (state,action) => {
          state.getAUsersPageData = action.payload
        })
    },
  });
  

  export default getAUsers.reducer