import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Routines = ({ token, user, routines }) => {
  return (
    <>
      <h2>Routines</h2>
      {user ? (
        <Link to="/MyRoutines">See My Routines</Link>
      ) : (
        "Login to see my routines"
      )}
      <div>
        {routines.map((routine) => {
          if (routine.isPublic) {
            return (
              <div key={routine.id}>
                <h1>{routine.name}:</h1>
                <h4>Goal: {routine.goal}</h4>
                <h4>Creator: {routine.creatorName}</h4>
                {routine.activities.map((activity) => {
                  return (
                    <div key={activity.id}>
                      <h3>Activity: {activity.name}</h3>
                      <h4>Duration: {activity.duration}</h4>
                      <h4>Count: {activity.count}</h4>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Routines;
