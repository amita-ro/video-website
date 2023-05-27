import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ videoId ,title }) => {
    let videoUrl;
  
    switch (videoId) {
      case '1':
        videoUrl = 'https://youtu.be/dZs_cLHfnNA';
        title = "LE SSERAFIM - Eve, Psyche & The Bluebeard’s wife";
        break;
      case '2':
        videoUrl = 'https://youtu.be/UBURTj20HXI';
        title = "LE SSERAFIM - UNFORGIVEN (feat. Nile Rodgers)";
        break;
      case '3':
        videoUrl = 'https://youtu.be/pyf8cbqyfPs';
        title = "LE SSERAFIM - ANTIFRAGILE";
        break;
    case '4':
        videoUrl = 'https://youtu.be/4vbDFu0PUew';
        title = "LE SSERAFIM - FEARLESS ";
        break;  
      default:
        videoUrl = '';
        break;
    }
  
    return (
      <div>
        <h2 hidden>Video {videoId}</h2>
        <h2>{title}</h2>
        <div style={{width:"100%", display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <ReactPlayer url={videoUrl} controls />
        </div>
      </div>
    );
  };
  

export default Video;
