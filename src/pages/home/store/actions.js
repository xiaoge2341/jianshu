import { FETCHTOPIC, FETCH_LIST } from './constants'

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