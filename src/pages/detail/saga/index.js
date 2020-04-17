import { FETCH_DETAIL, FETCH_DETAIL_SUCCESS } from './../store/constants'
import { call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
function * gfetchDetail (action) {
  // console.log(action)
  const writer = yield call(axios.get,'/mock/homeList.json?id='+action.id)
  // yield console.log(writer)
  yield put({type:FETCH_DETAIL_SUCCESS,detailWriter:writer})
}
function * watchgfetchDetail () {
  yield takeEvery(FETCH_DETAIL,gfetchDetail)
}
export const detailSaga = [
  watchgfetchDetail()
]