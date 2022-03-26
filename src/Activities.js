import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Activities = ({ token, user, activities }) => {
  return (
    <>
      <h1>Activities</h1>
      {user ? (
        <Link to="/CreateActivities">Create new activity</Link>
      ) : (
        "Login to create activities"
      )}

      <div>
        {activities.map((activities) => {
          if (activities.isPublic) {
            return (
              <div key={activities.id}>
                <h1>{activities.name}:</h1>
                <h3>Description {activities.description}</h3>

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

export default Activities;
