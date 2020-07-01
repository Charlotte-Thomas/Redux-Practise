import React from 'react'
import '../src/styles/App.css'
import ColourPicker from './components/ColourPicker'
import ColourChange from './components/ColourChange'
import TextForm from './components/TextForm'
import Messages from './components/Messages'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <ColourPicker />
        <ColourChange />
        <TextForm />
        <Messages />
      </header>
      </div>
    </Provider>
  )
}

export default App
