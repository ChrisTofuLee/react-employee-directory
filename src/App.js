import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Table from "./components/Table";


const App = () => {
  return (
    <div>
      <Title header="Employee Directory" subHeader="Click on heading to filter by clicked heading or use the search box to
        narrow your results." />
      <Form />
      <Table />
    </div>
  );
};



export default App;
