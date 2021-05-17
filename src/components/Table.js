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
      {props.employees.map((employee) => {
          console.log(employee)
          return (
           <tr>
           <td>{employee.name.first}{employee.name.last}</td>
           <td>{}</td>
           <td>{}</td>
           <td>{}</td>
           <td>{}</td>
       </tr>
      )})}
     
    </table>
  );
}

export default Table;
