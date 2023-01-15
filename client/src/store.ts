import {configureStore} from '@reduxjs/toolkit'
import themeSlice from './reduxSlice/themeSlice'
import usersDataSlice from './reduxSlice/fetchSlice/loginUserSlice'
import registerDataSlice from './reduxSlice/fetchSlice/registerUserPost'
import QuestionPageSlice from './reduxSlice/fetchSlice/QuestionPageSlice'
import PostDeletedSlice from './reduxSlice/fetchSlice/postDeletedSlice'
import getSelfUsersPostsSlice from './reduxSlice/fetchSlice/getSelfUsersPosts'
import allQuestionsSlice from './reduxSlice/fetchSlice/allQuestions'
import getAUsersSlice from './reduxSlice/fetchSlice/getAUsers'








export const store = configureStore({
   reducer:{
    darkModeSlice: themeSlice,
    usersData: usersDataSlice,
    registerData: registerDataSlice,
    QuestionPageSlice: QuestionPageSlice,
    PostDeletedSlice:PostDeletedSlice,
    getSelfUsersPostsSlice:getSelfUsersPostsSlice,
    allQuestionsSlice:allQuestionsSlice,
    getAUsersSlice:getAUsersSlice,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

