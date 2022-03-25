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
          return (
            <div key={routine.id}>
              <h1>{routine.name}</h1>
              <h4>{routine.goal}</h4>
              <h4>{routine.creatorName}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Routines;
