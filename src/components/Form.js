import React from "react";

function Form(props) {
  return (
    <form>
        <div className="form-row py-4">
          <div className="col-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search Name"
            ></input>
          </div>
        </div>
      </form>
  );
}

export default Form;
