import React from "react";
import "../index.css";


function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      {/* <SearchBar
        employees={this.state.employees}
        handleInputChange={this.handleInputChange}
      /> */}
      <p>Click "Name" to sort alphabetically by last name.</p>
    </div>
  );
}

export default Header;
