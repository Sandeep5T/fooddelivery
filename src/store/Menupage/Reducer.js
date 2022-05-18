import { combineReducers } from "redux";

const defaultCart = {};

const cartReducer = (state = defaultCart, action) => {
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

export default combineReducers({
  cart: cartReducer
});
