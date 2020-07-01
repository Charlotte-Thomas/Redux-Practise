import { combineReducers } from 'redux'
import colourReducer from './colourReducer'
import messageReducer from './messageReducer'

export default combineReducers({
  colour: colourReducer,
  messages: messageReducer
})