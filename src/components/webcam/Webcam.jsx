import React from 'react'
import header from '../../assets/header.png';
import './webcam.css';


function Webcam() {
  return (
    <div>
      <img src={ header } className="header" alt="GLP Header" id="header"/>
      <h2 className="webcam-text">In the future, this page will live stream the courts at Green Lake!  For 
      now, feel free to check out <a className="link-text" target="_blank" href="https://video.nest.com/live/cR0gr79KLZ">this stream</a>, 
      from the Green Lake boathouse.  At least from here, it's possible to see the weather as it will be on the courts!</h2>
    </div>
  )
}

export default Webcam