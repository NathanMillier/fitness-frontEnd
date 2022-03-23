import react, { useState, useEffect } from "react";
import { Link, Route, route } from "react-router-dom";
import Home from "./Home";
import Activities from "./Activities";
import Login from "./Routines";
import Register from "./Register";
import MyRoutines from "./MyRoutines";
import Routines from "./Routines";

const App = () => {
  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Routines">
          <Routines />
        </Route>

        <Route exact path="/MyRoutines">
          <MyRoutines />
        </Route>

        <Route exact path="/Activities">
          <Activities />
        </Route>

        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/Register">
          <Register />
        </Route>
      </div>
    </div>
  );
};

export default App;
