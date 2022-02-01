import React from "react";
import { fetchPicturesByKeyword } from "../Helpers/fetch";

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
        <div class="container">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-inline">
              <input
                type="text"
                className="form-control mx-2"
                id="keyword"
                aria-describedby="keyword"
                placeholder="Enter text"
                value={this.state.inputValue}
                onChange={this.handleChange}
              />
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </div>
          </form>
        </div>

        {this.renderPhotos()}
      </>
    );
  }
}

export default Photos;
