import Card from "../components/Card";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import authContext from "../utils/authContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const newState = { ...state };
      newState[action.name] = state[action.name] ? state[action.name] + 1 : 1;
      return newState;
    }
    case "sub": {
      const newState = { ...state };
      newState[action.name] = state[action.name] ? state[action.name] - 1 : 0;
      return newState;
    }
    default:
      return state;
  }
};

const MenuPage = (props) => {
  const params = useParams();
  const [cart, dispatchCart] = useReducer(reducer, {});
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
              handleAdd={() => dispatchCart({ type: "add", name: item.name })}
              handleRemove={() =>
                dispatchCart({ type: "sub", name: item.name })
              }
            />
          ))}
        </div>
      ) : (
        <h4>Loading</h4>
      )}
    </>
  );
};

const MenuPageWithToken = () => {
  return (
    <>
      <authContext.Consumer>
        {(value) => <MenuPage {...value} />}
      </authContext.Consumer>
    </>
  );
};
export default MenuPageWithToken;
