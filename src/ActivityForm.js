import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ActivityForm = ({ activitie, user, url, token, fetchActivities }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const history = useNavigate;

  const updateDescription = async (id) => {
    if (name) {
    }
    if (description) {
    }

    const response = await fetch(`${url}/activities/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });

    const data = await response.json();
    await fetchActivities();
    history("/Activities");
  };

  return (
    <div className="activitiesCard" key={activitie.id}>
      <Link to={`/Activities/${activitie.id}/routines`}>
        <h1>{activitie.name}:</h1>
        <h3>Description: {activitie.description}</h3>
      </Link>
      {user ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateDescription(activitie.id);
          }}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New name here..."
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="New description here..."
          />
          <button>update description</button>
        </form>
      ) : null}
    </div>
  );
};

export default ActivityForm;
