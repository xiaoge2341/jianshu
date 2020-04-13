import { FETCHTOPIC, FETCH_LIST, FETCH_WRITER, FETCH_MORE_LIST, BACKTOP } from './constants'

export const fetctTopic  = () => {
  return {
    type:FETCHTOPIC
  }
} 

export const fetchList = () => {
  // console.log('object')
  return {
    type:FETCH_LIST
  }
}
export const fetchMoreList = (page) => {
  // console.log(page)
  return {
    type:FETCH_MORE_LIST,
    page
  }
}

export const fetchWriter = () => {
  return {
    type:FETCH_WRITER
  }
}

//回顶部
export const backtop = (show) => {
  return {
    type:BACKTOP,
    show
  }
}
