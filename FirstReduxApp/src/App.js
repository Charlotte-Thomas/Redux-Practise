import React from 'react'
import '../src/styles/App.css'
import ColourPicker from './components/ColourPicker'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          hi
        <ColourPicker />
      </header>
      </div>
    </Provider>
  )
}

export default App


// colour picker
// changes block colour on screen
// changes name of colour on screen describing block colour
// component for block picker
// component for block that changes