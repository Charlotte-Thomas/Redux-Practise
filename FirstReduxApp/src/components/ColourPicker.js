import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const ColourPicker = () => {
  return (
    <div>
      <h1>picker</h1>
    </div>
  )
}

ColourPicker.propTypes = {
  prop: PropTypes
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ColourPicker)
