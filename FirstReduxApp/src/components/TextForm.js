import React, { Component, useState } from 'react'
import { connect } from 'react-redux'

const TextForm = () => {
  const [text, setText] = useState('')

  function updateForm(e) {
    setText(e.target.value)
  }

  function submitForm(e) {
    e.preventDefault()
    // redux action goes here
  }

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input onChange={(e) => updateForm(e)} placeholder='Enter a message' />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TextForm)
