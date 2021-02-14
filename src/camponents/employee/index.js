import React, { Component } from "react";
import EmployeeList from "../utils/index";
import Query from "../form"


export default class Employee extends Component {
  state = {
    employeeDirect: [],
    order: true,
  };

  componentDidMount() {
    EmployeeList().then((res) =>
      this.setState({employeeDirect: res.data.results})
    );
  }

  SortAz() {

    if(this.state.order === true){
    const sortedAz = this.state.employeeDirect
    sortedAz.sort((a, b) => {if (a.name.first > b.name.first) return 1;
    if(a.name.first < b.name.first) return -1;
    return 0;})
    this.setState({employeeDirect: sortedAz, order: false})
  }
    if(this.state.order === false){
    const sortedAz = this.state.employeeDirect
    sortedAz.sort((a, b) => {if (a.name.first < b.name.first) return 1;
    if(a.name.first > b.name.first) return -1;
    return 0;})
    this.setState({employeeDirect: sortedAz, order: true})
   }
}

updateAsEntered = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    })
    console.log(this.state.firstName)
  }

  searchByName = () => {
      const filtered = this.state.employeeDirect.filter(obj => obj.name.first === this.state.firstname)
      this.setState({employeeDirect: filtered})
  }

  render() {
    return (
        <>
       <Query filter={this.searchByName} updateAsEntered={this.updateAsEntered} firstname={this.state.firstname}/>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            
            <th scope="col">
            <button  onClick={this.SortAz.bind(this)}>Sort by name</button>
            </th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employeeDirect.map((obj, index) => (
            <tr key={index}>
              <td>
                <img src={obj.picture.thumbnail} />
              </td>
              <td>{obj.name.first}</td>
              <td>{obj.phone}</td>
              <td>{obj.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
  }
}
