import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { deleteAnwersPost } from '../../apiFetch/PostAnswersdelete'

interface IPPostAnwersDeletedApi {
    id: string;
    deleteAnwers: {
        userId: string;
    }
}

export const postAnwersDeletedApi = createAsyncThunk("postAnwersDeletedApi", async({id, deleteAnwers}: IPPostAnwersDeletedApi) => {
   const response = await deleteAnwersPost(id,deleteAnwers).then((res) => {
        if (res.status === 200) {
            alert("işlem başarılı bir şekilde gerçekleşti")
            return res
        } else {
            alert("işlem başarısız oldu")
        }
   })

   return response?.data;

})

const initialState:any = {
    anwersDeletedData: {}
}

const anwersDeleted = createSlice({
    name: "anwersDeleted",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postAnwersDeletedApi.fulfilled,(state,action) => {
            state.anwersDeletedData = action.payload;
        })
    },
}) 