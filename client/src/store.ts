import {configureStore} from '@reduxjs/toolkit'
import themeSlice from './reduxSlice/themeSlice'
import usersDataSlice from './reduxSlice/fetchSlice/loginUserSlice'
import registerDataSlice from './reduxSlice/fetchSlice/registerUserPost'
import QuestionPageSlice from './reduxSlice/fetchSlice/QuestionPageSlice'




export const store = configureStore({
   reducer:{
    darkModeSlice: themeSlice,
    usersData: usersDataSlice,
    registerData: registerDataSlice,
    QuestionPageSlice: QuestionPageSlice
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

