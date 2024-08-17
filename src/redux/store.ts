import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '@/redux/features/todoSlice'

export const store=configureStore({
    reducer:{
        todo:todoReducer,
    }
})


// typescript types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store