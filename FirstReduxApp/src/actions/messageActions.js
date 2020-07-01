import { ADD_MSG } from './types'

export const addMessage = (msg) => dispatch => {
  dispatch({
    type: ADD_MSG,
    payload: msg
  })
}
