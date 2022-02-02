import React from "react";
import { fetchPicturesByKeyword } from "../Helpers/fetch";
import SearchBar from "./SearchBar";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  state = {
    inputValue: "",
    photos: null
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

  renderPhotos() {
    console.log("photos : ", this.state.photos);

    return (
      this.state.photos &&
      this.state?.photos?.map((photo) => (
        <div className="container my-3" key={photo.id}>
          <img
            className="rounded img-fluid"
            src={photo?.urls?.full}
            alt={photo?.alt_description}
          />
        </div>
      ))
    );
  }

  render() {
    return (
      <>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
        {this.renderPhotos()}
      </>
    );
  }
}

export default Photos;
