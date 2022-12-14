import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment ">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div>
            <label>Image Search</label>
            <input
              type="text"
              placeholder="search"
              className="field"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
