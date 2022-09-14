import React from 'react'
import paddleStacks from '../../assets/paddle_stacks.png';
import cloudyGL from '../../assets/cloudy_green_lake.jpg';
import './photos.css';


function Photos() {
  return (
    <div className="text-align">
      <div className="photos">
        <img src={ paddleStacks } className="photo" alt="paddle stacks" />
        <span className="caption">Sometimes when it gets very crowded, there are many paddle stacks on the side of the court.</span>
        <hr />
        <img src={ cloudyGL } className="photo" alt="cloudy green lake" />
        <span className="caption">Green Lake courts on a cloudy weekend afternoon, a few days after pressure washing.</span>
      </div>
    </div>
  )
}

export default Photos