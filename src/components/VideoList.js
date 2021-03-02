import React from 'react';
import './video-list.css';
import VideoItem from './VideoItem'

const VideoList = ({videos,onVidSel}) =>  {
    console.log("onVidSel = " , onVidSel)

    const videolist = videos.map( (video) => {
        //console.log(video.id.videoId)
        return ( <VideoItem key = {video.id.videoId} video={video} onVidSel={onVidSel} /> );
     }
    );


    return (
        <div className="ui relaxed divided list"> {videolist} </div>
    );
}
export default VideoList;