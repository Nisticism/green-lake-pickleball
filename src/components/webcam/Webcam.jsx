import React from 'react'
import './webcam.css';


function Webcam() {
  return (
    <div>
      <p className="webcam-text">If this isn't working, please visit the <a className="link-text" target="_blank" rel="noreferrer" href="https://video.nest.com/live/cR0gr79KLZ">source</a>.
      </p>
      <div className="iframe-container">
          <iframe className="iframe-crop" src="https://greenlakeboathouse.com/green-lake-webcam/"/>
      </div>
    </div>
  )
}

export default Webcam