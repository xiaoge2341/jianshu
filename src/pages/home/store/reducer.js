import { fromJS } from 'immutable'
import { FETCHTOPIC_SUCCESS,FETCH_LIST_SUCCESS, FETCH_WRITER_SUCCESS } from './constants'
const initialState = fromJS({
  topic: [],
  homeList:[],
  writer:[]
})

export const homeReducer = (state=initialState,action = {}) => {
  switch (action.type) {
    case FETCHTOPIC_SUCCESS:
      // console.log(action)
      return state.set('topic',action.topic)
    case FETCH_LIST_SUCCESS:
      // console.log(action)
      return state.set('homeList',action.list)
    case FETCH_WRITER_SUCCESS:
      return state.set('writer',action.writer)
    default:
      return state;
  }
}
