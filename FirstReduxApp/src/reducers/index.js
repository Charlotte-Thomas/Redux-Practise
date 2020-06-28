import { combineReducers } from 'redux'
import colourReducer from './colourReducer'

export default combineReducers({
  colour: colourReducer
})