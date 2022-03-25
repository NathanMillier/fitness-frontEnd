import React, { useState, useEffect } from "react";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  const fetchRoutine = async () => {
    const routines = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const info = await routines.json();
    console.log(info);
    setRoutines(info);
  };

  useEffect(() => {
    fetchRoutine();
  }, []);

  return (
    <>
      <h1>Routines</h1>
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
