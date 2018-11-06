import React, { Component } from "react";
import SearchBar from "../components/searchBar.jsx";
import VideoDetails from "../components/videoDetails.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <VideoDetails />
      </React.Fragment>
    );
  }
}

export default App;
