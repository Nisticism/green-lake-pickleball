import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'

class NotFound extends Component {
  render () {
    return <div className="text-align">
      <h1>Sorry, we couldn't find a page here!</h1>
      <Link className="link-text" to="/">Back to home</Link>
    </div>
  }
}

export default NotFound