import {all} from 'redux-saga/effects'
import {headerSaga} from './../layouts/header/sagas'
import {homeSaga} from './../pages/home/saga/index'
import {detailSaga} from './../pages/detail/saga/index'
import {signInSaga} from './../pages/sign_in/saga/index'
export function * sagas () {
  yield all([
    ...headerSaga,
    ...homeSaga,
    ...detailSaga,
    ...signInSaga
  ])
}