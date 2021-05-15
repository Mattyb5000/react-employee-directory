import React, { Component } from "react";
import API from "../utils/API";
import Table from './Table';



class Container extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    API.getEmployee().then((res) => {
      this.setState({
        employees: res.data.results, });
      })
  }
  render() {
    return (
      <div className="container">
        <Table employees={this.state.employees} />
      </div>
    )
  }
}

// class Container extends Component {
//   state = {
//     API
//   };

//   render() {
//     return (
//       <div>
//         {this.state.employees.map((employee) => (
//           <Table
//             image={employee.picture.thumbnail}
//             name={employee.name}
//             phone={employee.phone}
//             email={employee.email}
//             gender={employee.gender}
//           />
//         ))}
//       </div>
//     );
//   }
// }

export default Container;
