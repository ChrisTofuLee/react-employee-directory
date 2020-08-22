import React, { Component } from "react";
import axios from "axios";


class TableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeList: [],
      search: "",
      filter: "",
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = async () => {
    try {
      const { data } = await axios.get(
        "https://randomuser.me/api/?results=100&nat=gb"
      );

      if (data.results) {
        this.setState({
          employeeList: data.results,
          error: null,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="container">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employeeList.map((employee) => {
              return (
                <tr>
                  <th scope="row">
                    <img
                      src={employee.picture.medium}
                      className="rounded mx-auto d-block"
                      alt="..."
                    />
                  </th>
                  <td className="align-middle">{employee.name.first}</td>
                  <td className="align-middle">{employee.phone}</td>
                  <td className="align-middle">{employee.email}</td>
                  <td className="align-middle">
                    {employee.dob.date.substring(0, 10)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableContainer;
