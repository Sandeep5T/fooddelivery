import axios from "axios";
import { useContext, useState } from "react";
import MyButton from "../components/MyButton";
import authContext from "../utils/authContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const context = useContext(authContext);
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      data: {
        email: user.username,
        password: user.password
      },
      url: "https://food-power.glitch.me/login"
    };
    axios(options)
      .then((res) => {
        context.setToken(res.data.token);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div>
      {!context.token && <h4>Please log in before checking restaurants</h4>}
      <form style={{ padding: 10 }} onSubmit={handleSignIn}>
        <div>
          <h1>Username</h1>
          <input
            type="text"
            name="username"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1>Password</h1>
          <input
            name="password"
            value={user.name}
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
      {context.token && <Navigate to="/restaurants" />}
    </div>
  );
};
export default Login;
