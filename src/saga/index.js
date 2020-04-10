import {all} from 'redux-saga/effects'
import {headerSaga} from './../layouts/header/sagas'
import {homeSaga} from './../pages/home/saga/index'
export function * sagas () {
  yield all([
    ...headerSaga,
    ...homeSaga
  ])
}