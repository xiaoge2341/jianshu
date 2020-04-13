import {FETCHTOPIC,FETCHTOPIC_SUCCESS, FETCH_LIST, FETCH_LIST_SUCCESS, FETCH_WRITER_SUCCESS, FETCH_WRITER, FETCH_MORE_LIST,FETCH_MORE_LIST_SUCCESS} from './../store/constants'
import axios from 'axios'
import {call,put,takeEvery} from 'redux-saga/effects'
//banner下推荐内容saga
function * gTopic () {
  const topic = yield call(axios.get,'/mock/topic.json')
  yield put({type:FETCHTOPIC_SUCCESS,topic:topic.data})
}
 function * watchgTopic () {
  yield takeEvery(FETCHTOPIC,gTopic)
}

//获取文章列表组件saga
 function * gList () {
  const list = yield call(axios.get,'/mock/homeList.json')
  yield put({type:FETCH_LIST_SUCCESS,list:list.data})
}
 function * watchgList () {
    yield takeEvery(FETCH_LIST,gList)
 }

 //推荐作者组件saga
 function * gWriter () {
   const writer = yield call(axios.get,'/mock/writer.json')
   yield put({type:FETCH_WRITER_SUCCESS,writer:writer.data})
 }
 function * watchgWriter () {
   yield takeEvery(FETCH_WRITER,gWriter)
 }

 //阅读更多功能saga
 function * moreList (action) {
  //  yield take(FETCH_MORE_LIST) //take阻塞yield，只有执行了里面的action.type才会继续
  //  console.log(action)
   const moreLists = yield call(axios.get,'/mock/addHomeList.json?page:'+action.page)
   yield put({type:FETCH_MORE_LIST_SUCCESS,moreList:moreLists})
 }
 function * watchMoreList () {
   yield takeEvery(FETCH_MORE_LIST,moreList)
 }
 
export const homeSaga = [
  watchgList(),
  watchgTopic(),
  watchgWriter(),
  watchMoreList()
]