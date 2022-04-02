import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPersonBiking,
//   faPersonRunning,
//   faPersonSwimming,
// } from "@fortawesome/free-solid-svg-icons";

const Home = ({ user }) => {
  return (
    <>
      <h2>Welcome to Your Custom Fitness Tracker Experience</h2>
      <h3>Your Journey to Fit</h3>
      <div className="icons">
        <FontAwesomeIcon icon={faPersonSwimming} />
        <FontAwesomeIcon icon={faPersonBiking} />
        <FontAwesomeIcon icon={faPersonRunning} />
      </div>
      <div className="steps">
        <h4>Step 1: If you are a new user, set up your account below</h4>
        <button className="glow-on-hover" type="button">
          Create Account
        </button>
        <h4>
          Step 2: Once you have created an account check out our database of
          activities and routines.
        </h4>
        <div className="click">
          <button className="glow-on-hover" type="button">
            Activities
          </button>
          <br></br>
          <br></br>
          <button className="glow-on-hover" type="button">
            Routines
          </button>
        </div>
        <h5>
          <em>
            Didn't see one you liked? Create your own
            <Link to="/Routines"> here</Link>
          </em>
        </h5>
        <h4>
          Step 3: Stay Consistent, Stay Hungry, and Build the Best Version of
          You!
        </h4>
      </div>
      {/* </section> */}
    </>
  );
};

export default Home;
