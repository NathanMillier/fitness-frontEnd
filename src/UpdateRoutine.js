import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateRoutine = ({ myRoutine }) => {
  const params = useParams();
  const [routine, setRoutine] = useState({});

  useEffect(async () => {
    setRoutine(
      myRoutine.filter((theRoutine) => {
        return theRoutine.id === +params.routineId;
      })[0]
    );
  }, [myRoutine]);
  console.log(routine);
  return (
    <>
      <h1>Update routine</h1>
      <form id="myForm">
        <select id="selectNumber"></select>
      </form>
    </>
  );
};

export default UpdateRoutine;
