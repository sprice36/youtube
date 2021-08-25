import React from 'react';
import './VideoCard.css';

const VideoCard = () => {
    return(
        <div className="VideoCard">
            <img className="video-thumbnail" src="https://via.placeholder.com/50" alt="thumbail" />
            <div className="content-container">
                <img className="profile-pic"  src="https://via.placeholder.com/25"alt="profile-pic"/>
                <div className="text-container">
                    <h3>"Cool Video"</h3>
                    <p>Capgemini</p>
                    <p>5000 views * 12 days</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
