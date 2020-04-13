import {FOCUSED, NOTFOCUSED, MOUSEENTER, MOUSELEAVE, CHANGEPAGE, HEADER_LIST} from './constants'

export const isFocused = () => {
  return {
    type:FOCUSED
  }
}
export const notFocused = () => {
  return {
    type:NOTFOCUSED
  }
}

export const getList = (list) => {
  // console.log(!list)
  if(!list){ //如果list已经存在那么不再重复获取数据(执行saga)
    return {
      type:HEADER_LIST
    }
  }else {
    return {
      type:''
    }
  }
}

export const mouseenter = () => {
  return {
    type:MOUSEENTER
  }
}
export const mouseleave = () => {
  return {
    type:MOUSELEAVE
  }
}

export const changePage = (page,totalPage) => {
  return {
    type:CHANGEPAGE,
    pageNum:page === totalPage ? 1 : page + 1
  }
}