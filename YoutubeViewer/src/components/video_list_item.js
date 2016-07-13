import React from 'react';

const VideoListItem = ( {video, onVideoSelect} ) => {
  // const video = props.video;
  // 매개변수로 props를 받아서 위 코드처럼 video를 고르는 것은
  // 매개변수로 {video} 를 넣는 것과 동일하다

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={()=>onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;