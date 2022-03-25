import { createBrowserHistory } from "history";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { url } from "./App";

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

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }

    const response = await fetch(`${url}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.error) {
      return setError(data.error.message);
    }
    setToken(data.token);
    localStorage.setItem("token", data.token);
    history.push("/MyRoutines");
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          required
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          required
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          required
          type="password"
          placeholder="Confirm"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button>Register</button>
      </form>
      <p>{error}</p>
      <div className="login-shortcut">
        <p>Already have an account?</p>
        <Link to="/Login">Login</Link>
      </div>
    </>
  );
};

export default Register;
