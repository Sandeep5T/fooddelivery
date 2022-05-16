import { Link } from "react-router-dom";

const Restaurant = (details) => {
  return (
    <Link to={`${details.id}/menus`}>
      <div className="card">
        <img src={details.image_url} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>{details.name}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Restaurant;
