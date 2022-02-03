import React from "react";
import SearchBar from "./SearchBar";
import videoList from "./VideoList";
import { fetchYoutubeVideos } from "../Helpers/fetch";

class VideoComponent extends React.Component {
  state = {
    query: "",
    videoList: []
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetchYoutubeVideos(this.state.query);
    console.log(response);
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      query: e.target.value
    });
  };

  render() {
    return (
      <>
        <SearchBar
          inputValue={this.state.query}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <videoList videos={this.state.videoList} />
      </>
    );
  }
}

export default VideoComponent;
