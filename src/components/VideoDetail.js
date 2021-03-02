import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading</div>
    }
    const videoid = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoid}`
    return (
        <div>
            <div className="ui embed">
                <iframe title = "Video Player" alt={video.snippet.title} src={url} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>

            </div>
        </div>
    );
}

export default VideoDetail;