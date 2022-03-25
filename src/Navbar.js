import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <h1>Fitness Tracker</h1>
        <div>
          <Link to="/">Hello</Link>
          <Link to="/Routines">Routines</Link>
          <Link to="/Activities">Activities</Link>
          <Link to="/Register">Login/Register</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
