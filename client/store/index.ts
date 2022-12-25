import { configureStore } from "@reduxjs/toolkit"
import {useDispatch, useSelector,TypedUseSelectorHook} from 'react-redux'
import { counterSlice } from "./slice/authSlice";


export const store = configureStore({
    reducer: {
      testSlice: counterSlice,
    },
  })

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;