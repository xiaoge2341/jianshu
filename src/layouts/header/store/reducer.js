import { FOCUSED, NOTFOCUSED, MOUSEENTER, MOUSELEAVE, CHANGEPAGE, HEADER_LIST_SUCCESS }  from './constants'
import {fromJS} from 'immutable'
// console.log(Immutable)
const defaultState = fromJS({
  focused: false,
  mouseIn:false,
  list:null,
  page:1,
  totalPage:1
})

export default (state = defaultState, action = {}) => {
  switch(action.type) {
    case FOCUSED:
      // console.log(state.set('focused',true))
      return state.set('focused',true)
        // focused:true,
        // page:state.page,
        // totalPage:state.totalPage
      
    case NOTFOCUSED:
      // console.log(state)
      return state.set('focused',false)
        // mouseIn:state.mouseIn,
        // list:state.list,
        // page:state.page,
        // totalPage:state.totalPage
      
    case HEADER_LIST_SUCCESS:
      // console.log(action)
      return state.merge({
        list:action.list.data,
        totalPage:action.totalPage
      })
        
        // focused:true,
        // list:action.list.data,
        // page:1,
        // totalPage:action.totalPage
      
    case MOUSEENTER:
      return state.set('mouseIn',true)
      // return {
      //   focused:state.focused,
      //   mouseIn:true,
      //   list:state.list,
      //   page:state.page,
      //   totalPage:state.totalPage
      // }
    case MOUSELEAVE:
      return state.set('mouseIn',false)
      // return {
      //   focused:state.focused,
      //   mouseIn:false,
      // }
    case CHANGEPAGE:
      return state.set('page',action.pageNum)
      // console.log(state.page,state.totalPage)
      // return {
      //   focused:state.focused,
      //   mouseIn:state.mouseIn,
      //   list:state.list,
      //   page:state.page===state.totalPage ? 1 : state.page+1,
      //   totalPage:state.totalPage
      // }
    default:
      // console.dir(state)
      return state;
  }
  
}