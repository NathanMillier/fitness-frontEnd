import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ActivityForm from "./ActivityForm";

const Activities = ({
  routines,
  user,
  activites,
  url,
  token,
  fetchActivities,
}) => {
  const { activityId } = useParams();
  const activity = activites.find((activite) => activityId === activite.id);

  return (
    <>
      <div className="activitiesHeader">
        <h2>Activities</h2>
      </div>
      <div>
        {user ? (
          <Link to="/MyActivities">Create new activity</Link>
        ) : (
          "Login to create activities"
        )}
      </div>
      <div>
        {activites
          ? activites.map((activitie) => {
              return (
                <ActivityForm
                  activitie={activitie}
                  user={user}
                  url={url}
                  token={token}
                  fetchActivities={fetchActivities}
                />
              );
            })
          : null}
      </div>
    </>
  );
};

export default Activities;
