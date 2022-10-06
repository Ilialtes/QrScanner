import dataReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'

export const Store = configureStore({
    reducer: {
        data: dataReducer
    }
})