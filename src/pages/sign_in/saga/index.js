import { LOGIN_IN,LOGIN_IN_SUCCESS } from './../store/constants'
import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'


function * glogin(action) {
  // console.log(action)
  const flag = yield call(axios.get,'/mock/login.json?userName='+action.userName+'&password='+action.password)
  const login = flag.data.status === '10001' ? true : false
  yield put({type:LOGIN_IN_SUCCESS,login:login})
}

function * watchglogin () {
  yield takeEvery(LOGIN_IN,glogin)
}

export const signInSaga = [
  watchglogin()
]