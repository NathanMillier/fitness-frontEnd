const Home = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h2>Welcome to Your Custom Fitness Tracker Experience</h2>
      <h3>Record Your Journey to Fit</h3>
      <div class="steps">
        <h4>Step 1: If you are a new user, first set up you account below</h4>
        <button class="glow-on-hover" type="button">
          Create Account
        </button>
        <h4>
          Step 2: Once you have created an account check out our database of
          activities and routines.
        </h4>
        <h4 span class="create">
          Didn't see one you liked? Create your own
          <a href="http://localhost:3000/Routines"> here</a>
        </h4>
      </div>
    </>
  );
};

export default Home;
