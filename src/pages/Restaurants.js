import Restaurant from "../components/Restaurant";
import token from "../pages/Login";

const Restaurants = (props) => {
  const restaurantsData = [
    {
      id: 25225,
      name: "Kritunga Restaurant",
      cusine: "Andhra",
      isOnlyVeg: false,
      image_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hhrv6ymv82sgddvwyffh"
    },
    {
      id: 32474,
      name: "Leon Grill",
      cusine: "American",
      isOnlyVeg: false,
      image_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hhrv6ymv82sgddvwyffh"
    },
    {
      id: 817,
      name: "The Bowl Company",
      cusine: "North Indian",
      isOnlyVeg: true,
      image_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hhrv6ymv82sgddvwyffh"
    }
  ];
  return (
    <>
      <h1>Restaurants</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        {restaurantsData.map((r) => (
          <Restaurant key={r.id} {...r} token={props.token} />
        ))}
      </div>
    </>
  );
};

export default Restaurants;
