const Home = ({ user }) => {
  return (
    <>
      <div className="homeHeader">
        <h2>Home</h2>
      </div>
      <div className="homeWelcomeCard">
        {user ? (
          <span>Welcome {user.username}</span>
        ) : (
          <span>Login or sign up to interact with routines and activities</span>
        )}
      </div>
      <div className="homeMainCard">
        <h1>Ready to get Swoll MF?!</h1>
        <h4>
          "Life has it's ups and downs, we just call them squats..." - FS Team
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan
          lectus ex, in consectetur leo dapibus quis. In vel sapien elementum,
          consectetur est in, hendrerit massa. Pellentesque pretium, justo et
          pretium finibus, ante lectus dapibus dolor, ultricies mollis ante enim
          et odio. Fusce vestibulum malesuada scelerisque. Praesent luctus nibh
          eget arcu tempor, eu eleifend urna commodo. In euismod dictum rutrum.
          Quisque eu maximus tortor. Ut magna sapien, mollis sodales ornare sit
          amet, interdum iaculis quam. Cras sollicitudin nunc sed ex venenatis,
          vitae blandit ligula viverra. Donec ut dui sapien.
        </p>
        <p>
          Curabitur lacinia sem non tortor congue, ac pulvinar nisl euismod.
          Curabitur malesuada quis elit sit amet sodales. Fusce in eleifend
          nunc, vitae auctor ex. Phasellus rhoncus sagittis mi, facilisis
          viverra justo semper eu. Proin imperdiet libero ut nunc tincidunt
          consectetur quis quis nibh. Aliquam sed tortor congue, luctus libero
          elementum, convallis mauris. Sed egestas, eros sed malesuada
          consectetur, justo velit tristique urna, vel laoreet ligula odio vitae
          ipsum. Nulla quis elit vel nisl auctor finibus non aliquet nunc.
          Nullam varius convallis dolor nec accumsan. Donec interdum odio at
          metus consectetur, vitae accumsan elit dictum. Nullam convallis tortor
          nec lacus fermentum ullamcorper.
        </p>
        <p>
          Sed aliquam purus ut turpis maximus ultrices. Pellentesque mi augue,
          cursus ac enim porta, rutrum ornare nisl. Morbi quis elementum quam.
          Integer tempor condimentum elit, et ultrices lorem. Sed urna lacus,
          iaculis venenatis rutrum nec, molestie ut eros. Sed lacinia elit eu
          felis auctor, interdum lobortis nunc mollis. Mauris consequat mattis
          ex, non rhoncus lectus mattis ac. Curabitur quis tristique elit, non
          accumsan tellus. Sed vel vulputate massa. Duis vel semper ante.
        </p>
      </div>
    </>
  );
};

export default Home;
