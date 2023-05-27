import React from 'react';
import './Thumbnail.css';

const Thumbnail = ({ thumbnail, videoId, title }) => {
    return (
        <div className='card'>
            <a href={`/video/${videoId}`}>
                <img src={thumbnail} alt={`Video ${videoId}`} style={{width: "500px"}} />
                <h3>{title}</h3>
            </a>
        </div>
        
      
    );
  };
  

export default Thumbnail;
