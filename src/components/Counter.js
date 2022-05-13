import React from "react";

export default function Counter(props) {
  return props.qty !== 0 ? (
    <div>
      <div>
        <button onClick={props.handleRemove}>-</button>
        {props.qty}
        <button onClick={props.handleAdd}>+</button>
      </div>
    </div>
  ) : (
    <button onClick={props.handleAdd}>Add</button>
  );
}
