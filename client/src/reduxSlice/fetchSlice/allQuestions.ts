import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allQuestionsFecthData } from "../../apiFetch/questionsFetch";
import { IRecord } from "../../models/Questions.models";

export const getAllQuestionsPost = createAsyncThunk(
  "getAllQuestionsPost",
  async () => {
    const response = await allQuestionsFecthData().then((res) => {
      if (res.status === 200) {
        return res;
      }
    });

    return response?.data;
  }
);

const initialState = {
  allQuestions: [] as IRecord[],
};

export const allQuestionPost = createSlice({
  name: "allQuestions",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllQuestionsPost.fulfilled, (state, action) => {
      state.allQuestions = action.payload;
    });
  },
});

export default allQuestionPost.reducer;
