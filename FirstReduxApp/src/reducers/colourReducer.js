import { CHANGE_COLOUR } from '../actions/types'

const initialState = {
  colour: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_COLOUR:
      return {
        ...state,
        colour: action.payload
      }
    default:
      return state
  }
}