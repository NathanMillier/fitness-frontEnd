import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Activities = ({ token, user, activities }) => {
  console.log(activities);
  return (
    <>
      <div className="activitiesHeader">
        <h2>Activities</h2>
      </div>
      <div className="activitiesSubHead">
        {user ? (
          <Link to="/MyActivities">Create new activity</Link>
        ) : (
          "Login to create activities"
        )}
      </div>
      <div>
        {activities.map((activities) => {
          return (
            <div className="activitiesCard" key={activities.id}>
              <h1>hi {user.name}</h1>
              <h1>{activities.name}:</h1>
              <h3>Description {activities.description}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Activities;
