import React from "react";


function Table(props) {
    console.log(props) 
  return (
    <table className="table">
      <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone number</th>
          <th>Email</th>
          <th>Gender</th>
      </tr>
      <tr>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
      </tr>
    </table>
  );
}

export default Table;
