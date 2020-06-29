import { CHANGE_COLOUR } from './types'

export const changeColour = (colour) => dispatch => {
  dispatch({
    type: CHANGE_COLOUR,
    payload: colour
  })
}

