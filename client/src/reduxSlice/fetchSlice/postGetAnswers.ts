
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getAnswersFetch } from "../../apiFetch/getPostAllAnswers";



  
  export const getPostAnswers = createAsyncThunk("getPostAnswers", async(postId: string) =>  {
    const response = await getAnswersFetch(postId).then(res => {
        if (res.status === 200) {
            alert("başarılı bir şekilde cevaplar geldi")
            return res
        } else {
            console.log("başarısız")
            alert("başarısız")
        }
    })
    return response?.data;
  });
  



const initialState = {
    postAnswersData: []
}

export const getAnswers = createSlice({
    name: "getAnswers",
    initialState,
    reducers: {
     
    },
    extraReducers(builder) {
        builder.addCase(getPostAnswers.fulfilled, (state,action) => {
          state.postAnswersData = action.payload
        })
    },
  });
  
  export default getAnswers.reducer