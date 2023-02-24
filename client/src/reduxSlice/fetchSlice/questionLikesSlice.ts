import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postLikeDataFecth } from "../../apiFetch/likePost";
import { likeDataI } from "../../models/likeData.models";

export const questionLikesFetch = createAsyncThunk(
  "questionLikesFetch",
  async (likeData: likeDataI) => {
    const response = await postLikeDataFecth(likeData).then((res: any) => {
      if (res.status === 200) {
        alert("Answes successfully");
        return res;
      } else {
        alert("başarısız");
      }
    });

    return response?.data;
  }
);

const initialState = {
  getLikesData: "",
};

export const likeSlice = createSlice({
  name: "likeSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(questionLikesFetch.fulfilled, (state, action) => {
      state.getLikesData = action.payload;
    });
  },
});

export default likeSlice.reducer;
