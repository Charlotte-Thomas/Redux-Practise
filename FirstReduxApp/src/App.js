import React from 'react'
import '../src/styles/App.css'
import ColourPicker from './components/ColourPicker'
import ColourChange from './components/ColourChange'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <ColourPicker />
        <ColourChange />
      </header>
      </div>
    </Provider>
  )
}

export default App
