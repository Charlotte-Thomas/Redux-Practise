import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const ColourPicker = () => {

  return (
    <div>
      <h1>colour picker</h1>
      <button className='blue'>Blue</button>
      <button className='pink'>Pink</button>
      <button className='green'>Green</button>
    </div>
  )
}

ColourPicker.propTypes = {
  // prop: PropTypes
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ColourPicker)
