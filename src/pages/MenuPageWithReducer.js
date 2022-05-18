import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";
import authContext from "../utils/authContext";
import { addToCart, removeFromCart } from "../store/Menupage/ActionCreators";

const MenuPageWithReducer = (props) => {
  const params = useParams();
  const cart = useSelector((state) => state.cart);
  const dispatchCart = useDispatch();
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = props.token;
    const options = {
      method: "GET",
      headers: {
        "content-type": `application/json`,
        Authorization: `Bearer ${token}`
      },
      url: `https://food-power.glitch.me/restaurant/${params.resid}`
    };

    axios(options)
      .then((res) => {
        const resp = res.data.data.menu.items;
        const formattedResponse = Object.values(resp).map((item) => ({
          id: item.id,
          name: item.name,
          cost: item.price
        }));
        setMenuData(formattedResponse);
      })
      .catch((err) => {
        console.log("Error", err);
      })
      .finally(() => setLoading(false));
  }, [params.resid]);

  const cartQuanity = () => {
    return Object.values(cart).reduce((total, i) => total + i, 0);
  };
  return (
    <>
      {!loading ? (
        <div>
          <h4>Res Id is {params.resid}</h4>
          {`${
            Object.keys(cart).filter((item) => cart[item] > 0).length
          } items/${cartQuanity()} total`}
          {menuData.map((item) => (
            <Card
              qty={cart[item.name] || 0}
              key={item.id}
              {...item}
              handleAdd={() => dispatchCart(addToCart(item.name))}
              handleRemove={() => dispatchCart(removeFromCart(item.name))}
            />
          ))}
        </div>
      ) : (
        <h4>Loading Your Food. Please wait</h4>
      )}
    </>
  );
};

const MenuPageWithToken = () => {
  return (
    <>
      <authContext.Consumer>
        {(value) => <MenuPageWithReducer {...value} />}
      </authContext.Consumer>
    </>
  );
};
export default MenuPageWithToken;
