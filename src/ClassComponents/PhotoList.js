import React from "react";

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.photos.length &&
      this.props?.photos?.map((photo) => (
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
}

export default PhotoList;
