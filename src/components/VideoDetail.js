import React from 'react';

export default function VideoDetail({video}) {

  //iframe makes some request to an outside source on its own w/o any ajax stuff
  //classname "embed" means it will embed video player inside 

  if(!video) {
    return <div>Loading...</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}
