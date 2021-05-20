import React from "react";
import "../index.css"
import SearchBar from './SearchBar'

function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <SearchBar />
      <p>Click "Name" to sort alphabetically by last name.</p>
     
    </div>
  );
}

export default Header;
