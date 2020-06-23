import React, { Component } from 'react'
import Posts from './Posts'

class Postform extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label><br />
            <input type='text' name='title'
              onChange={this.onChange}
              value={this.state.title} />
          </div>
          <br />
          <div>
            <label>Body: </label><br />
            <textarea name='body'
              value={this.state.body}
              onChange={this.onChange} />
          </div>
          <br />
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default Postform