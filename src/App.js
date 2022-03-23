import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Activities from "./Activities";
import Login from "./Routines";
import Register from "./Register";
import MyRoutines from "./MyRoutines";
import Routines from "./Routines";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route exact component={<Home />} path="/" />

          <Route exact component={<Routines />} path="/Routines" />

          <Route exact component={<MyRoutines />} path="/MyRoutines" />

          <Route exact component={<Activities />} path="/Activities" />

          <Route exact component={<Login />} path="/Login" />

          <Route exact component={<Register />} path="/Register" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
