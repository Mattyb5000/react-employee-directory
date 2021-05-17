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
          console.log("another employee", employee)
          return (
           <tr key={employee.login.uuid}>
           <td>{<img src={employee.picture.thumbnail} alt="employee thumbnail" />}</td>
           <td>{employee.name.first} {employee.name.last}</td>
           <td>{employee.phone}</td>
           <td>{employee.email}</td>
           <td>{employee.gender}</td>
       </tr>
      )})}
     
    </table>
  );
}

export default Table;
