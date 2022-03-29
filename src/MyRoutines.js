import React, { useState, useEffect } from "react";

const MyRoutines = ({ token, routines, user }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleCreateRoutine = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const resp = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
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
        Create Routine Form
        <form onSubmit={handleCreateRoutine}>
          <input
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Enter goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <button type="submit">Submit Routine</button>
        </form>
      </div>
      <div>
        My Routines
        {routines.map((routine) => {
          if (routine.creatorId == user.id) {
            return (
              <div>
                <form></form>
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
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default MyRoutines;
