import React from "react";


function TableContainer(props) {
    if (props.loading) {
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
            {props.employeeList.map((employee) => {
              return (
                <tr>
                  <th
                    scope="row"
                    id={`${employee.name.first} ${employee.name.last}`}
                  >
                    <img
                      src={employee.picture.medium}
                      className="rounded mx-auto d-block"
                      alt="..."
                    />
                  </th>
                  <td className="align-middle">{`${employee.name.first} ${employee.name.last}`}</td>
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

export default TableContainer;
