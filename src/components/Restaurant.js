import { Link } from "react-router-dom";

const Restaurant = (details) => {
  console.log("Token", details.token);
  return (
    <Link to={`${details.id}/menus`}>
      <div className="card">
        <img src={details.image_url} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>{details.name}</h4>
          <p> {details.cusine}</p>
        </div>
      </div>
    </Link>
  );
};

export default Restaurant;
