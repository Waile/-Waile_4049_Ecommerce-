import React from "react";
import Signup from "./Signup";

const Login = () => {
  const userDetails = {
    firstName: "Waile",
    lastName: "Naeem",
    email: "waile@gmail.com",
    city: "Lahore",
  };

  return (
    <>
      <h2>Login Page</h2>
      <Signup data={userDetails} />
    </>
  );
};

export default Login;
