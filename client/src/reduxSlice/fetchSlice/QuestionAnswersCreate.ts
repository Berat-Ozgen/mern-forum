import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { createAnswes } from '../../apiFetch/createAnswes';

export const createQuestionAnswers = createAsyncThunk("createQuestionAnswers", async (AnswesData) => {
    const response = await createAnswes(AnswesData).then(res => {
        if (res.status === 200) {
            alert("Answes successfully");
            return res
        } else {
            alert("Answes error");
        }
    })
    return response?.data;
})

const initialState = {
    questionAnswersData: []
}

export const createAnswers = createSlice({
    name: "createAnswers",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(createQuestionAnswers.fulfilled, (state,action) => {
            state.questionAnswersData = action.payload;
        })
    },
})