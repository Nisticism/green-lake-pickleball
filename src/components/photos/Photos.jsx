import React from 'react'
import paddleStacks from '../../assets/paddle_stacks.png';
import './photos.css';


function Photos() {
  return (
    <div className="text-align">
      <div className="photos">
        <img src={ paddleStacks } className="photo" alt="paddle stacks" />
        <span className="caption">Sometimes when it gets very crowded, there are many paddle stacks on the side of the court.</span>
        <hr />
      </div>
    </div>
  )
}

export default Photos