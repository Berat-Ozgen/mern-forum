import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { questionPageHandleDeletedFetchApi } from "../../apiFetch/questionPageFetch";

interface IdeletePost {
  userId: string;
}

interface FetchPayload {
  id: string;
  deletePost: IdeletePost;
}

export const handleDeletedPost = createAsyncThunk(
  "handleDelete",
  async ({ id, deletePost }: FetchPayload) => {
    const response = await questionPageHandleDeletedFetchApi(
      id,
      deletePost
    ).then((res) => {
      if (res.status === 200) {
        alert("silme işlemi başarılı");
        return res;
      } else {
        alert("silme işlemi başarısız");
      }
    });

    return response?.data;
  }
);

const initialState = {
  DeletedData: {},
};

export const handleDeleted = createSlice({
  name: "handleDeleted",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(handleDeletedPost.fulfilled, (state, action) => {
      state.DeletedData = action.payload;
    });
  },
});

export default handleDeleted.reducer;
