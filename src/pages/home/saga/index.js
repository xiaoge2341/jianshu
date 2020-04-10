import {FETCHTOPIC,FETCHTOPIC_SUCCESS, FETCH_LIST, FETCH_LIST_SUCCESS} from './../store/constants'
import axios from 'axios'
import {call,put,takeLatest,takeEvery} from 'redux-saga/effects'
 function * gTopic () {
  const topic = yield call(axios.get,'/mock/topic.json')
  // console.log(topic)
  yield put({type:FETCHTOPIC_SUCCESS,topic:topic.data})
}
 function * watchgTopic () {
  yield takeEvery(FETCHTOPIC,gTopic)
}


 function * gList () {
  const list = yield call(axios.get,'/mock/list.json')
  // console.log(list)
  yield put({type:FETCH_LIST_SUCCESS,list:list.data})
}
  function * watchgList () {
    yield takeEvery(FETCH_LIST,gList)
  }

export const homeSaga = [
  watchgList(),
  watchgTopic()
]