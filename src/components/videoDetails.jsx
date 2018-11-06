import React, { Component } from "react";
import VideoListItem from "./videoListItem";
const VideoDetails = () => {
  const movies = ["movie1", "movie2", "movie3", "movie4", "movie5"];
  return (
    <ul>
      {movies.map(movie => (
        <VideoListItem key={movie} movie={movie} />
      ))}
    </ul>
  );
};

export default VideoDetails;
