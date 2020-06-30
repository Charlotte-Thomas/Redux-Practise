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
    this.makeChange = this.makeChange.bind(this)
    this.makerequest = this.makerequest.bind(this)
  }

  makerequest() {
    this.props.changeColour(this.state.colour)
  }

  makeChange(e) {
    console.log('current state: ', this.props.storedColour)
    this.setState({ colour: e.target.className })
  }

  render() {
    return (
      <div>
        <h1>colour picker</h1>
        <button className='blue' onClick={(e) => this.makeChange(e)}>Blue</button>
        <button className='pink' onClick={(e) => this.makeChange(e)}>Pink</button>
        <button className='green' onClick={(e) => this.makeChange(e)}>Green</button>
        <button onClick={() => this.makerequest()}>Make req</button>
      </div>
    )
  }
}

ColourPicker.propTypes = {
  changeColour: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  storedColour: state, // here state what data you want from your redux global store & it places into component props
})

const mapDispatchToProps = {
  changeColour // here state what actions you want to use in your component and it adds to props
}

export default connect(mapStateToProps, mapDispatchToProps)(ColourPicker)
