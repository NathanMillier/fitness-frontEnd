const Home = ({ user }) => {
  return (
    <>
      <h1>Home</h1>
      {user ? (
        <span>Welcome {user.username}</span>
      ) : (
        <span>Login or sign up to interact with routines and activities</span>
      )}
      <h2>Home</h2>
      <button class="glow-on-hover" type="button">
        CLICK ME !
      </button>
    </>
  );
};

export default Home;
