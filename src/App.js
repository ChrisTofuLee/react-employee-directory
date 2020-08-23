import React, { Component } from "react";
import axios from "axios";

import Title from "./components/Title";
import Form from "./components/Form";
import TableContainer from "./components/TableContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      employeeList: [],
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

  filterFunction = () => {
    // const employeeSearch = event.target.id;
    const employeeFilter = this.state.employeeList.filter((employee) =>
      employee.name.first.includes(this.state.search)
    );
    this.setState({
      employeeList: employeeFilter,
    });
  };

  onSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
    this.filterFunction();
  };

  render() {
    return (
      <div>
        <Title
          header="Employee Directory"
          subHeader="Click on heading to filter by clicked heading or use the search box to
      narrow your results."
        />
        <Form onSearch={this.onSearch} />
        <TableContainer
          employeeList={this.state.employeeList}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
export default App;
