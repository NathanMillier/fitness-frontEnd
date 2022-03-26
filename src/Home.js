const Home = ({ user }) => {
  return (
    
    <>
      <h1>Home</h1>
      {user ? (
        <span>Welcome {user.username}</span>
      ) : (
        <span>Login or sign up to interact with routines and activities</span>
      )}
    </>
  );
};

export default Home;
