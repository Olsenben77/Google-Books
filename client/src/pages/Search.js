import React from "react";
import API from "../utils/API";
export default ({ setInput, searchSubmit, books }) => {
  return (
    <div className="search-area">
      <form action="">
        <input type="text" />
        <button className="btn btn-warning" type="submit">
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

/* <h1>Search Google Books</h1>
<input onChange={(e) => setInput(e.target.value)} />

<button className="btn btn-warning" onClick={() => searchSubmit()}>
  Submit
</button>

<h2>Results</h2> */
