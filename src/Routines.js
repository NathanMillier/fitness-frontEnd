import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Routines = ({ token, user, routines }) => {
  return (
    <>
      <div className="routinesHeader">
        <h2>Routines</h2>
      </div>
      {user ? (
        <Link to="/MyRoutines">See My Routines</Link>
      ) : (
        "Login to see my routines"
      )}
      <div>
        {routines.map((routine) => {
          if (routine.isPublic) {
            return (
              <div className="routinesCard" key={routine.id}>
                <h2>{routine.name}:</h2>
                <h4>Goal: {routine.goal}</h4>
                <h5>Creator: {routine.creatorName}</h5>
                <div>
                  {routine.activities.map((activity) => {
                    return (
                      <div key={activity.id}>
                        <h1>Activity: {activity.name}</h1>
                        <h4>Duration: {activity.duration}</h4>
                        <h4>Count: {activity.count}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Routines;
