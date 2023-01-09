import {configureStore} from '@reduxjs/toolkit'
import themeSlice from './reduxSlice/themeSlice'
import usersDataSlice from './reduxSlice/fetchSlice/loginUserSlice'


export const store = configureStore({
   reducer:{
    darkModeSlice: themeSlice,
    usersData: usersDataSlice
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

