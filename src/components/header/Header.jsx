import React, { Component } from 'react'
import header from '../../assets/header.png';
import './header.css';


function Header() {
  return (
    <div>
      <img src={ header } className="header" alt="GLP Header" id="header"/>
    </div>
  )
}

export default Header