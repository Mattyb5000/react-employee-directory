import React from "react";

function SearchBar() {
  return (
    <select
      className="form-select form-select-sm mb-3"
    >
      <option selected>Choose a gender from this dropdown</option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
    </select>
    //     <form className="search">
    //     <div className="form-group">
    //       <label htmlFor="gender">Search by gender:</label>
    //       <input
    //         value={props.search}
    //         onChange={props.handleInputChange}
    //         name="gender"
    //         list="gender"
    //         type="text"
    //         className="form-control"
    //         placeholder="Type in gender to begin"
    //         id="gender"
    //       />
    //       <datalist id="gender">
    //         {props.gender.map(gender => (
    //           <option value={gender} key={gender} />
    //         ))}
    //       </datalist>
    //       <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
    //         Search
    //       </button>
    //     </div>
    //   </form>
  );
}

export default SearchBar;
