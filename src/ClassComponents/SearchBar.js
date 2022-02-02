import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <div className="form-inline">
            <input
              type="text"
              className="form-control mr-2"
              id="keyword"
              aria-describedby="keyword"
              placeholder="Enter text"
              value={this.props.inputValue}
              onChange={this.props.handleChange}
            />
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
