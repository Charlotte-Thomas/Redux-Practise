import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ColourChange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colour: ''
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.storedColour ? this.props.storedColour : 'no colour picked yet'}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  storedColour: state.colour.colour // here state what data you want from your redux global store & it places into component props
})

export default connect(mapStateToProps, null)(ColourChange)
