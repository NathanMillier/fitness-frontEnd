import React, { useState, useEffect } from "react";

const MyActivities = ({ token, activities, user }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateActivity = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const resp = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/activities",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          description: description,
          isPublic: true,
        }),
      }
    );
    const info = await resp.json();
    console.log(info);
  };

  return (
    <>
      <div>
        Create Your Activiy Below
        <form onSubmit={handleCreateActivity}>
          <input
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Submit Activity</button>
        </form>
      </div>
      <div>
        My Activities
        {activities.map((activities) => {
          if (actvities.creatorId == user.id) {
            return (
              <div key={actvities.id}>
                <h1>{actvities.name}:</h1>
                <h3>Description: {actvities.description}</h3>
                <h4>Creator: {activities.creatorName}</h4>
                {routine.activities.map((activities) => {
                  return (
                    <div key={activity.id}>
                      <h3>Activity: {activity.name}</h3>
                      <h4>Description: {activity.description}</h4>
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

export default MyActivities;
