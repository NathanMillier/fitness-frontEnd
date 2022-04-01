import { useParams } from "react-router-dom";

const SingleActivity = ({ activites }) => {
  const [activityRoutines, setActivityRoutines] = useState([]);
  const { actitityId } = useParams();
  const activity = activites.find((activite) => actitityId === activite.id);

  return (
    <>
      <h1>ge</h1>
    </>
  );
};

export default SingleActivity;
