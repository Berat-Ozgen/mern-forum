import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { createAnswes } from '../../apiFetch/createAnswes';

export const createAnswersQues = createAsyncThunk("createQuestionAnswers", async (AnswesData:any) => {
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

interface QuestionAnswerData {
    createdAt: string;
    des: string;
    postId: string;
    updatedAt: string;
    username: string;
    __v: number;
    _id: string;
}

interface InitialState {
    questionAnswersData: QuestionAnswerData;
}

const initialState: InitialState = {
    questionAnswersData: {} as QuestionAnswerData
};

export const createAnswers = createSlice({
    name: "createAnswers",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(createAnswersQues.fulfilled, (state,action) => {
            state.questionAnswersData = action.payload;
        })
    },
})

export default createAnswers.reducer