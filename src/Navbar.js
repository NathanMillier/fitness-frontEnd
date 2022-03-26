import { Link } from "react-router-dom";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <>
      <div>
        <h1>Fitness Tracker</h1>
        <div>
          <Link to="/">Hello</Link>
          <Link to="/Routines">Routines</Link>
          <Link to="/Activities">Activities</Link>
          {user ? (
            <>
              <Link to="/MyRoutines">My Routines</Link>
              <Link
                onClick={() => {
                  setToken("");
                  setUser(null);
                  localStorage.removeItem("token");
                }}
                to="/"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/Register">Login/Register</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
