import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeColour} from '../actions/colourActions'
import { addMessage} from '../actions/messageActions'

const TextForm = (props) => {
  const [text, setText] = useState('')
  const [msg, setMsg] = useState('')

  function updateForm(e, num) {
    num === 1 ? setText(e.target.value) : setMsg(e.target.value)
  }

  function submitForm(e, num) {
    e.preventDefault()
    num === 1 ? props.changeColour(text) : props.addMessage(msg)
    setText('')
    setMsg('')

  }

  return (
    <div>
      <form onSubmit={(e) => submitForm(e, 1)}>
        <input onChange={(e) => updateForm(e, 1)} placeholder='Enter a colour' value={text}/>
      </form>
      <form onSubmit={(e) => submitForm(e, 2)}>
        <input onChange={(e) => updateForm(e, 2)} placeholder='Enter a message' value={msg}/>
      </form>
    </div>
  )
}


const mapDispatchToProps = {
  changeColour,
  addMessage
}

export default connect(null, mapDispatchToProps)(TextForm)
