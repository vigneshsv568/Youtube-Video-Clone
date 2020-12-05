import React from 'react';
import VideoItem from './VideoItem'


const VideoList = ({video, onVideoSelect}) => {
  const renderList =  video.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    })
return(
<div className="ui relaxed divided list">{renderList}</div>
)
};
export default VideoList;