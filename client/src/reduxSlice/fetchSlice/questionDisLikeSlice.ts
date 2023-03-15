import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postDisLikeDataFecth } from "../../apiFetch/dislikePost";
import { likeAndDisLikeData } from "../../models/likeData.models";

export const questionDisLikesFetch = createAsyncThunk(
  "questionLikesFetch",
  async (disLikeData: likeAndDisLikeData) => {
    const response = await postDisLikeDataFecth(disLikeData).then(
      (res: any) => {
        if (res.status === 200) {
          alert("Answes successfully");
          return res;
        } else {
          alert("başarısız");
        }
      }
    );

    return response?.data;
  }
);

const initialState = {
  getDisLikesData: "",
};

export const disLikeSlice = createSlice({
  name: "disLikeSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(questionDisLikesFetch.fulfilled, (state, action) => {
      state.getDisLikesData = action.payload;
    });
  },
});

export default disLikeSlice.reducer;
