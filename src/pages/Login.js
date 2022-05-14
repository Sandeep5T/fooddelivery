import axios from "axios";
import { useContext, useState } from "react";
import MyButton from "../components/MyButton";
import authContext from "../utils/authContext";

const Login = (props) => {
  const context = useContext(authContext);
  const [userInput, setUserInput] = useState({});
  const handleChange = (e) => {
    const newUser = { ...userInput };
    newUser[e.target.name] = e.target.value;
    setUserInput(newUser);
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      data: {
        email: userInput.username,
        password: userInput.password
      },
      url: "https://food-power.glitch.me/login"
    };
    axios(options)
      .then((res) => {
        context.setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form style={{ padding: 10 }} onSubmit={handleSignIn}>
      <div>
        <h1>Username</h1>
        <input
          type="text"
          name="username"
          value={userInput.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <h1>Password</h1>
        <input
          name="password"
          value={userInput.name}
          onChange={handleChange}
          type="password"
        />
      </div>
      <div style={{ paddingTop: "32px" }}>
        <MyButton
          cursor="pointer"
          type="submit"
          content="Sign In"
          bgcolor="#008CBA"
        />
      </div>
    </form>
  );
};
export default Login;
