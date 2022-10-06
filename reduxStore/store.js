import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import dataReducer from './reducers'
//import {configureStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit'
const rootReducer = combineReducers({ dataReducer})
export const Store = createStore(rootReducer,applyMiddleware(thunk))