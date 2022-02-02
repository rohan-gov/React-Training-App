import React from "react";
import { fetchPicturesByKeyword } from "../Helpers/fetch";
import SearchBar from "./SearchBar";
import PhotoList from "./PhotoList";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  state = {
    inputValue: "",
    photos: []
  };

  handleChange(e) {
    this.setState({
      ...this.state,
      inputValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchData(this.state.inputValue);
  }

  async fetchData(keyword) {
    const response = await fetchPicturesByKeyword(keyword);
    console.log("fetchdata", response);

    this.setState({
      ...this.state,
      photos: response?.data?.results
    });
  }

  render() {
    return (
      <>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
        <PhotoList photos={this.state.photos} />
      </>
    );
  }
}

export default Photos;
