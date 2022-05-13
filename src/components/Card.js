import Counter from "./Counter";
const Card = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.cost}</h4>
      <Counter
        qty={props.qty}
        name={props.name}
        handleAdd={props.handleAdd}
        handleRemove={props.handleRemove}
      />
    </div>
  );
};

export default Card;
