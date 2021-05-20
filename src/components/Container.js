import React, { Component } from "react";
import API from "../utils/API";
import Table from './Table';




class Container extends Component {
  state = {
    employees: [],
    sortedEmployees: [],
  };

  handleSort = () => {
    // console.log("hello")
    // function compare( a, b ) {
    //   if ( a.last_nom < b.last_nom ){
    //     return -1;
    //   }
    //   if ( a.last_nom > b.last_nom ){
    //     return 1;
    //   }
    //   return 0;
    // }
    
    // objs.sort( compare );

    const lastNames = [];
    this.state.employees.forEach((employee) => {
        lastNames.push(employee.name.last)
    })
   console.log(lastNames.sort())
   this.setState({
    employees: lastNames 
  });
  //  set state to sorted array
}

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
