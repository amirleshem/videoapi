import React from 'react'
import './video-item.css'

const VideoItem = ({video,onVidSel}) => {
    const videoid = video.id.videoId;
    const src = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <div onClick={ () => onVidSel(video) } className="video-item item"> 
            <img className="ui image" src = {src}/> 
            <div className="content">
                <div className="header">{title}</div>
            </div>       
        </div>
    );

}

export default VideoItem;