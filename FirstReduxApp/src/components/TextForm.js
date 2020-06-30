import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeColour } from '../actions/colourActions'

const TextForm = (props) => {
  const [text, setText] = useState('')

  function updateForm(e) {
    setText(e.target.value)
  }

  function submitForm(e) {
    e.preventDefault()
    props.changeColour(text)

  }

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input onChange={(e) => updateForm(e)} placeholder='Enter a colour' />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  changeColour
}

export default connect(mapStateToProps, mapDispatchToProps)(TextForm)
