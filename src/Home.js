const Home = ({ user }) => {
  return (
    <>
      <h2>Home</h2>
      {user ? (
        <span>Welcome {user.username}</span>
      ) : (
        <span>Login or sign up to interact with routines and activities</span>
      )}
    </>
  );
};

export default Home;
