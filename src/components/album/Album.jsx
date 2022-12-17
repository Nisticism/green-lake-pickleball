import React from 'react'
import './album.css';



function Album({albumData}) {

  return (
    <div className="text-align">
      <div className="album">
        <div className="album-title-header">
          {albumData.title}
        </div>
        <div className="album-caption">
          {albumData.albumCaption ? albumData.albumCaption : ""}
        </div>
        {
          albumData ? albumData.photos.map((n, index) => 
          
          <div key={index} className="album-photo-divider">
            <img className="album-photo" src={albumData.photos[index]} alt={albumData.alts[index]}/>
            <div className="caption">{albumData.captions[index]}</div>
          </div>

          ) : <div className='no-photos'>This album has no photos!  Are you sure you typed the album name correctly?  If so, please contact us.</div>
        }
      </div>
    </div>
  )
}

export default Album