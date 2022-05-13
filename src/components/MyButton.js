const MyButton = (props) => {
  const buttonStyle = {
    backgroundColor: props.bgcolor,
    color: "#fff",
    border: "none",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    cursor: props.cursor
  };

  return (
    <button type={props.type} style={buttonStyle}>
      {" "}
      {props.content}{" "}
    </button>
  );
};

export default MyButton;
