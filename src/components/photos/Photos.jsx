import React from 'react'
import header from '../../assets/header.png';
import './photos.css';


function Photos() {
  return (
    <div>
      <img src={ header } className="header" alt="GLP Header" id="header"/>
      <h1>Photos</h1>
    </div>
  )
}

export default Photos