import { combineReducers } from 'redux'
import header from '../layouts/header/store/reducer'
import {homeReducer} from './../pages/home/store/reducer'
export const rootReducer = combineReducers({
  header,
  homeReducer
})