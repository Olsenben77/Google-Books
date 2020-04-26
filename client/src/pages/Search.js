import React, { Component } from "react";
import "./Search.css";

//code to construct the components

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    return <div></div>;
  }
}

const SearchArea = () => {
  return (
    <div className="search-area">
      <form action="">
        <input
          type="text"
          style={{ marginTop: "25px", marginRight: "5px", marginLeft: "10px" }}
        />
        <button
          className="btn btn-warning"
          type="submit"
          style={{ marginBottom: "5px", color: "white" }}
        >
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
