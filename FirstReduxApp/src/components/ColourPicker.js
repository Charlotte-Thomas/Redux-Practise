import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { changeColour } from '../actions/colourActions'

class ColourPicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      colour: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const colour = {
      colour: this.state.colour
    }
    this.props.changeColour(colour)
  }

  makeChange(e) {
    this.setState({ colour: e.target.className })
  }

  render() {
    return (
      <div>
        <h1>colour picker</h1>
        <button className='blue' onClick={(e) => this.makeChange(e)}>Blue</button>
        <button className='pink' onClick={(e) => this.makeChange(e)}>Pink</button>
        <button className='green' onClick={(e) => this.makeChange(e)}>Green</button>
      </div>
    )
  }
}

ColourPicker.propTypes = {
  changeColour: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ColourPicker)
