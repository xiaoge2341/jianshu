import { fromJS } from 'immutable'
import { FETCHTOPIC_SUCCESS,FETCH_LIST_SUCCESS } from './constants'
const initialState = fromJS({
  topic: [],
  homeList:[],

})

export const homeReducer = (state=initialState,action = {}) => {
  switch (action.type) {
    case FETCHTOPIC_SUCCESS:
      // console.log(action)
      return state.set('topic',action.topic)
    case FETCH_LIST_SUCCESS:
      // console.log(action)
      return state.set('homeList',action.list)
    default:
      return state;
  }
}
