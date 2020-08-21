import React from "react";

const styles = {
    border3: {
      // borderWidth: "10px !important",
      // borderStyle: "solid",
      borderBottom: "10px solid red",
    },
    header: {
      background: "green",
      height: "200px",
    },
    // isMember ? '$2.00' : '$10.00'
    headerH1: {
      margin: 0,
      paddingTop: "75px",
      textAlign: "center",
      color: "yellow",
      fontSize: "3rem",
      borderStyle: "solid",
    },
  }; 

function Title(props) {
  return (
    <nav
      className="bg-dark text-light border-bottom border-danger py-4"
      styles={styles.border3}
    >
      <h1 className="text-center">{props.header}</h1>
      <p className="text-center">
        {props.subHeader}
      </p>
    </nav>
  );
}

export default Title;
