import React from 'react';
import FetchAPI from './FetchAPI';
import axios from 'axios';

const RecommendedVideos = () => {
    axios
    .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=PK&key=AIzaSyBpU4qmIOrepyEnXBUNCgqJuRfxEYN5kp8`)
    .then(response => {
        console.log(response.data.items)
    })
   // .then(VideoCards(response.data.items))
    
}

function VideoCards(videoItems){
     let newVideoCards = [];
     
    //  videoItems.map(item => {
    //      const title =  item.
    //  })
}


export default VideoCards;