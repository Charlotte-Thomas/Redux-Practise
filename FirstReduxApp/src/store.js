
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = { hi: [1, 2, 3] } 
const middleware = [thunk]

const store = createStore(() => [], initialState, applyMiddleware())

export default store