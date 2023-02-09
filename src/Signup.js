import React from "react";
import Login from "./Login";

const Signup = ({ data }) => {
  let { firstName, lastName, email, city } = data;

  return (
    <>
      <h2> Signup</h2>
      {/* <Login data={userDetails} /> */}
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{city}</p>
    </>
  );
};

export default Signup;
