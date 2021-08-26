import VideoCard from "./VideoCard";

function VideoCards({ data }) {
  const renderData = data.map((item) => {
    const videoCardProps = {
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      views: item.statistics.viewCount,
      // still need to add 'days ago posted' to videoCardProps object
    };

    return <VideoCard videoCardProps={videoCardProps} key={item.id} />;
  });

  return <div>{renderData}</div>;
}

export default VideoCards;
