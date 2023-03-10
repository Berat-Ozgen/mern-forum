import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginPost } from "../../apiFetch/loginFetch";

export const loginUserPost = createAsyncThunk("postData", async (a: any) => {
  const response = await loginPost(a.loginData).then((res) => {
    if (res.status === 200) {
      a.navigate("/");
      return res;
    }
  });

  return response?.data;
});

interface IInitialState {
  createdAt: string;
  email: string;
  images: string;
  biography: string;
  password: string;
  updatedAt: string;
  username: string;
  _v: number;
  _id: string;
}

interface IState {
  userInformation: IInitialState | null;
}

const userData = localStorage.getItem("user");

const initialState: IState = {
  userInformation: userData ? JSON.parse(userData) : null,
};

export const loginUsers = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersExit: (state, action) => {
      localStorage.removeItem("user");
      state.userInformation = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUserPost.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.userInformation = action.payload;
    });
  },
});

export const { usersExit } = loginUsers.actions;
export default loginUsers.reducer;
