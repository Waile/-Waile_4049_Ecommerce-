import React from "react";
// import PropPractice from "./PropPractice";
// import "./StylePractice.css";

const StylePractice = (props) => {
  // const hstyle = {
  //   color: "red",
  //   backgroundColor: "yellow",
  //   width: "200px",
  //   textAlign: "center",
  //   margin: "auto",
  // };
  return (
    <>
      {/* <h1
        style={{ color: "red", textAlign: "center", backgroundColor: "yellow" }}
      >
        Hello
      </h1> */}

      {/* <h2>This is Style Component</h2> */}
      {/* <h2>This is internal CSS Styling</h2> */}
      {/* <p>External CSS</p> */}
      {/* <PropPractice data="Hello World" />
      <p>{user.name_}</p>
      <p>{user.email}</p>
      <p>{user.id}</p> */}
      <p>{props.user.name}</p>
      <p>{props.user.id}</p>
      <p>{props.user.email}</p>
    </>
  );
};

export default StylePractice;
