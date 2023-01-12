import {configureStore} from '@reduxjs/toolkit'
import themeSlice from './reduxSlice/themeSlice'
import usersDataSlice from './reduxSlice/fetchSlice/loginUserSlice'
import registerDataSlice from './reduxSlice/fetchSlice/registerUserPost'



export const store = configureStore({
   reducer:{
    darkModeSlice: themeSlice,
    usersData: usersDataSlice,
    registerData: registerDataSlice,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

