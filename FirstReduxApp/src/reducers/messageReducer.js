import { ADD_MSG } from '../actions/types'

const initialState = {
  messages: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_MSG:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    default:
      return state
  }
}