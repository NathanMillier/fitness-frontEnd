import { createBrowserHistory } from "history";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({
  token,
  setToken,
  username,
  setUsername,
  password,
  setPassword,
  confirm,
  setConfirm,
}) => {
  const [error, setError] = useState("");
  const history = createBrowserHistory();
  return (
    <>
      <h1>Register</h1>
    </>
  );
};

export default Register;
