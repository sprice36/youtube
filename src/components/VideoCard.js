import React from "react";
import "./VideoCard.css";

const VideoCard = ({ videoCardProps }) => {
  const { thumbnail, title, channelTitle, views } = videoCardProps;
  return (
    <div className="VideoCard"  style={{marginLeft:90}}>
      <img className="video-thumbnail" src={thumbnail} alt="thumbail"  />
      <div className="content-container" >
        <img
          className="profile-pic"
          src="https://via.placeholder.com/25"
          alt="profile-pic"
        />
        <div className="text-container">
          <h3>{title}</h3>
          <p>{channelTitle}</p>
          <p>{views} views * 12 days</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
