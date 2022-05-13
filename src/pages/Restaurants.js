import Restaurant from "../components/Restaurant";

const Restaurants = () => {
  const restaurantsData = [
    {
      id: 1,
      name: "Kritunga Restaurant",
      cusine: "Andhra",
      isOnlyVeg: false,
      image_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hhrv6ymv82sgddvwyffh"
    },
    {
      id: 2,
      name: "Leon Grill",
      cusine: "American",
      isOnlyVeg: false,
      image_url:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hhrv6ymv82sgddvwyffh"
    },
    {
      id: 3,
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
          <Restaurant key={r.id} {...r} />
        ))}
      </div>
    </>
  );
};

export default Restaurants;
