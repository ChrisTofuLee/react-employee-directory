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
      employeeFilterList: [],
      filter: "",
      loading: true,
      error: null,
      countName: 0,
      countDob: 0,
      countEmail: 0,
    };
  }

  sortByName = () => {
    if (this.state.countName == 0) {
      const newData = this.state.employeeFilterList.sort((a, b) => {
        if (a.name.first > b.name.first) {
          return 1;
        } else {
          return -1;
        }
      });

      this.setState({
        countName: 1,
        employeeFilterList: newData,
      });
    } else {
      const newData = this.state.employeeFilterList.sort((a, b) => {
        if (a.name.first > b.name.first) {
          return -1;
        } else {
          return 1;
        }
      });

      this.setState({
        countName: 0,
        employeeFilterList: newData,
      });
    }
  };

  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }

  dynamicNegativeSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      if (sortOrder == -1) {
        return a[property].localeCompare(b[property]);
      } else {
        return b[property].localeCompare(a[property]);
      }
    };
  }

  sortByEmail = () => {
    if (this.state.countEmail == 0) {
      const newData = this.state.employeeFilterList.sort(
        this.dynamicSort("email")
      );
      this.setState({
        countEmail: 1,
        employeeFilterList: newData,
      });
    } else {
      const newData = this.state.employeeFilterList.sort(
        this.dynamicNegativeSort("email")
      );
      this.setState({
        countEmail: 0,
        employeeFilterList: newData,
      });
    }
  };

  sortByDob = () => {
    if (this.state.countDob == 0) {
      const newData = this.state.employeeFilterList.sort(
        this.dynamicSort("email")
      );
      this.setState({
        countDob: 1,
        employeeFilterList: newData,
      });
    } else {
      const newData = this.state.employeeFilterList.sort(
        this.dynamicNegativeSort("phone")
      );
      this.setState({
        countDob: 0,
        employeeFilterList: newData,
      });
    }
  };

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
          employeeFilterList: data.results,
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
    const employeeFilter = this.state.employeeList.filter((employee) => {
      let name = `${employee.name.first} ${employee.name.last}`;
      return name.toUpperCase().indexOf(this.state.search.toUpperCase()) !== -1;
    });
    this.setState({
      employeeFilterList: employeeFilter,
    });
  };

  onSearch = async (event) => {
    await this.setState({
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
          employeeList={this.state.employeeFilterList}
          loading={this.state.loading}
          sortByName={this.sortByName}
          sortByEmail={this.sortByEmail}
    
        />
      </div>
    );
  }
}
export default App;
