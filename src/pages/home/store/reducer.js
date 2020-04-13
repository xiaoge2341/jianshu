import { fromJS } from 'immutable'
import { FETCHTOPIC_SUCCESS,FETCH_LIST_SUCCESS, FETCH_WRITER_SUCCESS, FETCH_MORE_LIST_SUCCESS, BACKTOP } from './constants'
const initialState = fromJS({
  topic: [],
  homeList:[],
  writer:[],
  homeListPage:1,
  backTopShow:true
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

    case FETCH_MORE_LIST_SUCCESS:
      return state.merge({
        homeList:state.get('homeList').concat(action.moreList.data),
        homeListPage:state.get('homeListPage')+1
      })

    case BACKTOP:
      // console.log(action.show)
      return state.set('backTopShow',action.show)
      
    default:
      return state;
  }
}
