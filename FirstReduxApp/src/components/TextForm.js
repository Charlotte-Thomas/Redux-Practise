import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeColour } from '../actions/colourActions'

const TextForm = (props) => {
  const [text, setText] = useState('')

  function updateForm(e, num) {
    num == 1 ? setText(e.target.value) : console.log('')
  }

  function submitForm(e, num) {
    e.preventDefault()
    props.changeColour(text)

  }

  return (
    <div>
      <form onSubmit={(e) => submitForm(e, 1)}>
        <input onChange={(e) => updateForm(e, 1)} placeholder='Enter a colour' />
      </form>
      <form onSubmit={(e) => submitForm(e, 2)}>
        <input onChange={(e) => updateForm(e, 2)} placeholder='Enter a message' />
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
