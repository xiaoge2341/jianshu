import {fromJS} from 'immutable'
import {LOGIN_IN_SUCCESS, LOGIN_OUT} from './constants'

const initialState = fromJS({
  login:false
})

export const signInReducer = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN_IN_SUCCESS:
      return state.set('login',action.login)
    case LOGIN_OUT:
      return state.set('login',false)
    default:
      return state
  }
}