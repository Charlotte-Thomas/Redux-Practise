import { CHANGE_COLOUR } from './types'

export const changeColour = (colour) => dispatch => {
  console.log('hi')
  dispatch({
    type: CHANGE_COLOUR,
    payload: colour
  })
}

