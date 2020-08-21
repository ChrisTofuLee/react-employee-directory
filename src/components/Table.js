import React from "react";

function Table(props) {
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
            <tr>
              <th scope="row">
                <img
                  src="https://randomuser.me/api/portraits/med/women/4.jpg"
                  class="rounded mx-auto d-block"
                  alt="..."
                />
              </th>
              <td className="align-middle">Emily Perkins</td>
              <td className="align-middle">0121 220 7896</td>
              <td className="align-middle">emily.perkins@example.com</td>
              <td className="align-middle">1949-10-24</td>
            </tr>
            <tr>
              <th scope="row">
                <img
                  src="https://randomuser.me/api/portraits/med/women/4.jpg"
                  class="rounded mx-auto d-block"
                  alt="..."
                />
              </th>
              <td className="align-middle">Emily Perkins</td>
              <td className="align-middle">0121 220 7896</td>
              <td className="align-middle">emily.perkins@example.com</td>
              <td className="align-middle">1949-10-24</td>
            </tr>
            <tr>
              <th scope="row">
                <img
                  src="https://randomuser.me/api/portraits/med/women/4.jpg"
                  class="rounded mx-auto d-block"
                  alt="..."
                />
              </th>
              <td className="align-middle">Emily Perkins</td>
              <td className="align-middle">0121 220 7896</td>
              <td className="align-middle">emily.perkins@example.com</td>
              <td className="align-middle">1949-10-24</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default Table;
