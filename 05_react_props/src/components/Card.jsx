import "./Card.css";

function Card() {
  return (
    <>
      <div className="card">
        <div className="profile-image">
          <img
            src="https://www.shutterstock.com/discover/free-nature-images"
            alt="Profile"
          />
        </div>

        <h1>Sarthak Sharma</h1>

        <p>
          Lorem ipsum dolor sit amet
          <br />
          consectetur adipisicing elit.
        </p>

        <button>View Profile</button>
      </div>
    </>
  );
}

export default Card;