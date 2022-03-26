import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="nav">
        <div id="navtitle">
          <h1>Fitness Tracker</h1>
        </div>
        <div id="links">
          <Link to="/" className="link">
            Hello
          </Link>
          <Link to="/Routines" className="link">
            Routines
          </Link>
          <Link to="/Activities" className="link">
            Activities
          </Link>
          <Link to="/Login" className="link">
            Login/Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
