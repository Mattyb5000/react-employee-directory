import React from "react";
import API from "../utils/API";

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
          <tr>{props.thumbnail}</tr>
          <tr>{props.name}</tr>
          <tr>{props.phone}</tr>
          <tr>{props.email}</tr>
          <tr>{props.gender}</tr>
      </tr>
    </table>
  );
}

export default Table;
