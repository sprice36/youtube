import React from 'react';
import axios from 'axios';

function FetchAPI() {
    axios
    .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PK&key=AIzaSyBpU4qmIOrepyEnXBUNCgqJuRfxEYN5kp8`)
    .then(response => {
        console.log(response)
    })
}

export default FetchAPI;