import React, { Component } from "react";
import VideoListItem from "./videoListItem";

const VideoList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return <VideoListItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export default VideoList;
