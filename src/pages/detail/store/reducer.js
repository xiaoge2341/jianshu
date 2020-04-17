import * as constants from './constants'

const initialState = {
  detailWriter:null
}

export const detailReducer = (state=initialState,action={}) => {
  switch (action.type) {
    case constants.FETCH_DETAIL_SUCCESS:
      // console.log(action)
      return {
        detailWriter:action.detailWriter.data
      }
    default:
      return state
  }
}