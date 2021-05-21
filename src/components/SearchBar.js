import React from "react";

function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          placeholder="Search by last name"
        />
      </div>
    </form>
  );
}

export default SearchBar;
