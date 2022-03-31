const Home = () => {
  return (
    <>
      <h2>Welcome to Your Custom Fitness Tracker Experience</h2>
      <h3>Your Journey to Fit</h3>
      {/* <FontAwesomeIcon icon="fa-solid fa-person-running" /> */}
      {/* <i class="fa-solid fa-person-running"></i> */}
      <div class="steps">
        <h4>Step 1: If you are a new user, set up your account below</h4>
        <button class="glow-on-hover" type="button">
          Create Account
        </button>
        <h4>
          Step 2: Once you have created an account check out our database of
          activities and routines.
        </h4>
        <div class="click">
          <button class="glow-on-hover" type="button">
            Activities
          </button>
          <br></br>
          <br></br>
          <button class="glow-on-hover" type="button">
            Routines
          </button>
        </div>
        <h4 span class="create">
          <em>
            Didn't see one you liked? Create your own
            <a href="http://localhost:3000/Routines"> here</a>
          </em>
        </h4>
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
