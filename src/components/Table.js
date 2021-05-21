import React from "react";
// import Container from './Container';

function Table(props) {
  return (
    <table className="table">
      <thead>
        <th>Image</th>
        <th onClick={props.handleSort}>Name</th>
        <th>Phone number</th>
        <th>Email</th>
        <th>Gender</th>
      </thead>
      <tbody>
        {props.employees.map((employee) => {
          return (
            <tr key={employee.login.uuid}>
              <td>
                <img
                  src={employee.picture.thumbnail}
                  alt="employee thumbnail"
                />
              </td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
