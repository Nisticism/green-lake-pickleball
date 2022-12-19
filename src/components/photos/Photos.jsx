import React from 'react'
import { AlbumButton } from '../../components';
import './photos.css';

function Photos() {
  const ButtonData = {
    misc: 
    {title: "Miscellaneous", url: "/photos/misc", src: "images/misc/paddle_stacks.png"},
    nyt: 
    {title: "New York Times Photos (2022)", url: "/photos/nyt", src: "images/nyt/img_0028.JPG"}
  }
  return (
    <div className="text-align photos-wrapper">
      <div>
        <span className="album-titles">Albums</span>
      </div>
      <div className="hr-photos">
        <hr/>
      </div>
      <div className="photos">
        <AlbumButton buttonData={ButtonData.misc}/>
        <AlbumButton buttonData={ButtonData.nyt}/>
      </div>
    </div>
  )
}

export default Photos