import React from 'react'
import { Link } from 'react-router-dom';
import './album_button.css';


function AlbumButton({buttonData}) {

  return (
    <div className="text-align album-button-wrapper">
      <div className="album-title">
        {buttonData.title}
      </div>
      <div className="album-button">
        {
          buttonData ?         
            <Link to={buttonData.url}>
              <img className="album-button-pic" src={buttonData.src} alt={buttonData.alt} />
            </Link> 
          : false
        }
      </div>
    </div>
  )
}

export default AlbumButton