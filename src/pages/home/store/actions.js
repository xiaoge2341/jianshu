import { FETCHTOPIC, FETCH_LIST, FETCH_WRITER } from './constants'

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

export const fetchWriter =() => {
  // console.log('ooo')
  return {
    type:FETCH_WRITER
  }
}