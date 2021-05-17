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
      const emp = res.data.results.map((employee) => {
        return employee;
      });
      console.log("response", res.data)
      this.setState({
        employees: res.data.results });
      });
      // console.log("this is the state",this.state.employees);
  }
  render() {
    return (
      <div className="container">
        <Table employees={this.state.employees} />
      </div>
    )
  }
}

export default Container;
