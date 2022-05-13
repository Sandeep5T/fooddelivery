import Card from "./Card";
import { useReducer } from "react";
import { useParams } from "react-router";

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

const MenuPage = () => {
  const params = useParams();
  const [cart, dispatchCart] = useReducer(reducer, {});

  const menuData = [
    {
      id: "r00139",
      name: "idly",
      cost: 40
    },
    {
      id: "r00123",
      name: "vada pav",
      cost: 41
    },
    {
      id: "r00148",
      name: "pani poori",
      cost: 25
    }
  ];

  const cartQuanity = () => {
    return Object.values(cart).reduce((total, i) => total + i, 0);
  };
  return (
    <>
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
            handleRemove={() => dispatchCart({ type: "sub", name: item.name })}
          />
        ))}
      </div>
    </>
  );
};

export default MenuPage;
