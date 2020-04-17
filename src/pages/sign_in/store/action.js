import {LOGIN_IN,LOGIN_OUT} from './constants'

export const signIn = (refs) => {
  // console.log(refs.email.value,refs.password.value)
  return {
    type:LOGIN_IN,
    userName:refs.email.value,
    password:refs.password.value
  }
}

export const loginout = () => {
  // console.log('object')
  return {
    type:LOGIN_OUT
  }
}