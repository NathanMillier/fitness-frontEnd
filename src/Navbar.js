import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="heroimage">
        <div id="nav">
          <h1>Fitness Tracker</h1>

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
      </section>
    </>
  );
};

export default Navbar;
