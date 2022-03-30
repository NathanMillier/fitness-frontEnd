import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Activities from "./Activities";
import Login from "./Login";
import Register from "./Register";
import MyRoutines from "./MyRoutines";
import Routines from "./Routines";
import Navbar from "./Navbar";
import UpdateRoutine from "./UpdateRoutine";
export const url = "https://fitnesstrac-kr.herokuapp.com/api";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [routines, setRoutines] = useState([]);
  const [error, setError] = useState("");
  const [activites, setActivites] = useState([]);

  const fetchRoutine = async () => {
    const routines = await fetch(`${url}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await routines.json();
    setRoutines(info);
    console.log("routines fetched");
  };

  const fetchUser = async () => {
    const lsToken = localStorage.getItem("token");

    if (lsToken) {
      setToken(lsToken);
    }

    const resp = await fetch(`${url}/users/me`, {
      headers: {
        Authorization: `Bearer ${lsToken}`,
      },
    });
    const info = await resp.json();

    if (!info.error) {
      console.log("user fetched");
      setUser(info);
    }
  };

  const fetchActivities = async () => {
    const routines = await fetch(`${url}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await routines.json();

    setActivites(info);
    console.log("activities fetched");
  };

  useEffect(() => {
    fetchUser();
    fetchRoutine();
    fetchActivities();
  }, [token]);

  return (
    <div id="container">
      <Navbar user={user} setUser={setUser} setToken={setToken} />
      <div id="main-section">
        <Routes>
          <Route exact element={<Home user={user} />} path="/" />

          <Route
            exact
            element={<Routines user={user} routines={routines} />}
            path="/Routines"
          />

          <Route
            exact
            element={
              <MyRoutines user={user} token={token} routines={routines} />
            }
            path="/MyRoutines"
          />

          <Route
            exact
            element={<Activities user={user} activities={activites} />}
            path="/Activities"
          />

          <Route
            exact
            element={
              <Login
                token={token}
                setToken={setToken}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                error={error}
                setError={setError}
              />
            }
            path="/Login"
          />

          <Route
            exact
            element={
              <Register
                token={token}
                setToken={setToken}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                confirm={confirm}
                setConfirm={setConfirm}
                error={error}
                setError={setError}
              />
            }
            path="/Register"
          />
          <Route
            exact
            element={<UpdateRoutine user={user} routines={routines} />}
            path="/UpdateRoutine"
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
