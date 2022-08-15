import React from 'react'
import header from '../../assets/header.png';
import './about.css';


function About() {
  return (
    <div className="text-align">
      <img src={ header } className="header" alt="GLP Header" id="header"/>
      <h2>About</h2>
    </div>
  )
}

export default About