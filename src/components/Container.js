import React, { Component } from 'react';
import API from '../utils/API';
// import Header from "./Header.js";

class Container extends Component {
  state = {
    employees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    API.getEmployee().then((res) => {
      const emp = res.data.results.map((employee) => {
        return employee;
        
      });
      console.log(emp[1]);
      
      this.setState({ employees: emp });
    });
  }

  render() {
    return (
      <div className="container">
      Container
    </div>
    );
    
  }
}

export default Container;
    
