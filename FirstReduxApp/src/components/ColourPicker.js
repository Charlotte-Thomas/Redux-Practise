import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeColour } from '../actions/colourActions'

export const ColourPicker = (props) => {


  function makeChange(e) {
    changeColour(e.target.className)
  }

  return (
    <div>
      <h1>colour picker</h1>
      <button className='blue' onClick={(e) => makeChange(e)}>Blue</button>
      <button className='pink' onClick={(e) => makeChange(e)}>Pink</button>
      <button className='green' onClick={(e) => makeChange(e)}>Green</button>
    </div>
  )
}

ColourPicker.propTypes = {
  changeColour: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ColourPicker)
