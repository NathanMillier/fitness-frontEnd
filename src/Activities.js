import React, { useState } from "react";

const Activities = () => {
  
  const deleteActivity = async (ACTIVITY_ID) => {
    const filteredArray = activities.filter((item) => item.id !== `${ACTIVITY_ID}`);
    setActivities(filteredArray);
    try {
      const resp= await fetch (`${APIURL}/activities/${POST_ID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }

      })

    }
  }
  
  
  
  
  
  
  
  return (
    <>
      <h1>Activities</h1>

      <div className="activitesHeader">
        <h1>Activites</h1>
      </div>
      <div className="activitesSubHead">
        <Link to="/newactivites">Create New Activity?</Link>
        <input
          placeholder="What cha lookin for?..."
          value={""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </>
  );
};

export default Activities;
