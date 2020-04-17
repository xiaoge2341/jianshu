import {FETCH_DETAIL} from './constants'

export const fetchDetail = (id) => {
  // console.log(id)
  return {
    type:FETCH_DETAIL,
    id
  }
}