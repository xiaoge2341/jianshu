import { combineReducers } from 'redux'
import header from '../layouts/header/store/reducer'
import {homeReducer} from './../pages/home/store/reducer'
import {detailReducer} from './../pages/detail/store/reducer'
import {signInReducer} from './../pages/sign_in/store/reducer'
export const rootReducer = combineReducers({
  header,
  homeReducer,
  detailReducer,
  signInReducer
})