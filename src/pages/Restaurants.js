import axios from "axios";
import { useEffect, useContext, useState } from "react";
import Restaurant from "../components/Restaurant";
import authContext from "../utils/authContext";
import { Navigate } from "react-router-dom";

const Restaurants = (props) => {
  const context = useContext(authContext);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${context.token}`
      },
      url: `https://food-power.glitch.me/restaurants?limit=5&lastDeliveryTime=0`
    };
    axios(options)
      .then((res) => {
        setRestaurants(res.data.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          context.setToken(null);
        }
      })
      .finally(() => setLoading(false));
  }, [""]);
  return (
    <>
      <h1>Restaurants</h1>
      {loading && <h1>Loading. Please wait...</h1>}
      {!context.token ? (
        <Navigate to="/" />
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          {restaurants.map((r) => (
            <Restaurant key={r.id} {...r} />
          ))}
        </div>
      )}
    </>
  );
};

export default Restaurants;
