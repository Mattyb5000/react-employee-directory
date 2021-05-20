import React, { Component } from "react";
import API from "../utils/API";
import Table from './Table';
class Container extends Component {
  state = {
    employees: [],
    sortedEmployees: [],
    filteredEmployees: []
  };

  handleSort = () => {
    function compare( a, b ) {
      if ( a.name.last < b.name.last ){
        return -1;
      }
      if ( a.name.last > b.name.last ){
        return 1;
      }
      return 0;
    }
    const lastNames = this.state.employees.sort(compare);

   this.setState({
    employees: lastNames 
  });
  //  set state to sorted array
};

handleInputChange = event => {
  this.setState({ filteredEmployees: event.target.value });
};

  componentDidMount() {
    API.getEmployee().then((res) => {
     
      // console.log("response", res.data)
      this.setState({
        employees: res.data.results 
      });
    });

  }
  render() {
    return (
    
      <div className="container">
       
        <Table 
     
          employees={this.state.employees}
          handleSort={this.handleSort}
        />
        
        
      </div>
    )
  }
}

export default Container;
