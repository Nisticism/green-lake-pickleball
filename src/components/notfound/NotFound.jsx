import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'

class NotFound extends Component {
  render () {
    return <div>
      <h1>Sorry, we couldn't find a page here!</h1>
      <Link to="/">Back to home</Link>
    </div>
  }
}

export default NotFound