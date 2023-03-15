import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Params } from "react-router-dom";
import { singleQuestionFetchApi } from "../../apiFetch/questionPageFetch";

export const singleQuestion = createAsyncThunk(
  "singleQuestion",
  async (paramas: Params) => {
    const response = await singleQuestionFetchApi(paramas).then((res) => {
      if (res.status === 200) {
        return res;
      } else {
        alert("hata oluştu" + res.status);
      }
    });

    return response?.data;
  }
);

interface InitialState {
  singleQuestionData: {
    createdAt: string;
    des: string;
    updatedAt: string;
    userId: string;
    username: string;
    __v: number;
    _id: string;
  };
}

const initialState: InitialState = {
  singleQuestionData: {
    createdAt: "",
    des: "",
    updatedAt: "",
    userId: "",
    username: "",
    __v: 1,
    _id: "",
  },
};

export const singleQuestionSlice = createSlice({
  name: "singleQuestion",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(singleQuestion.fulfilled, (state, action) => {
      state.singleQuestionData = action.payload;
    });
  },
});

export default singleQuestionSlice.reducer;
