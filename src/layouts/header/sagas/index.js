import {put,takeEvery,call} from 'redux-saga/effects'
import { HEADER_LIST_SUCCESS, HEADER_LIST } from './../store/constants'
import axios from 'axios'

function * gfetchlist () {
  const lists = yield call(axios.get,'/mock/headerList.json')
  // console.log(lists)
  yield put({type:HEADER_LIST_SUCCESS, list:lists, totalPage:Math.ceil(lists.data.data.length / 5)})
}

function * watchgfetchlist () {
  yield takeEvery(HEADER_LIST,gfetchlist)
}

export const headerSaga = [
  watchgfetchlist()
]