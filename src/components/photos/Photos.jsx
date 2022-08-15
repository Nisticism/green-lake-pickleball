import React from 'react'
import header from '../../assets/header.png';
import './photos.css';


function Photos() {
  return (
    <div className="text-align">
      <img src={ header } className="header" alt="GLP Header" id="header"/>
      <h2>Photos</h2>
    </div>
  )
}

export default Photos