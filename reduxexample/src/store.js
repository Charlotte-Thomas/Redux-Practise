import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootreducer from './reducers' // don't have to specify index.js

const initialState = {}

const middleware = [thunk]

// const store = createStore(() => [], {}, applyMiddleware()) <----- old vs
const store = createStore(rootreducer, initialState, applyMiddleware(...middleware))

export default store