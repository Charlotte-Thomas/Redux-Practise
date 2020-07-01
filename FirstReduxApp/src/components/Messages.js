import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Messages = () => {
  return (
    <div>
      <div>
        hi
      </div>
    </div>
  )
}

Messages.propTypes = {
  prop: PropTypes
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps, null)(Messages)
