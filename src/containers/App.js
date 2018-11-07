import React, { Component } from "react";
import SearchBar from "../components/searchBar.jsx";
import VideoDetails from "../components/videoDetails.jsx";
import axios from "axios";

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=ca7199ebe559e1edbd87dc944eb12b56";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: {}, currentMovie: {} };
  }
  componentDidMount() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(res => {
      this.setState({ movieList: res.data.results.slice(1, 6) });
      this.setState({ currentMovie: res.data.results[0] });
    });
  }
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
