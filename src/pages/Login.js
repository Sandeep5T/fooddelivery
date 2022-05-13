import { useState } from "react";
import MyButton from "../components/MyButton";

const Login = () => {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const handleSignIn = () => {
    console.log("Sign in attempted using ", user);
  };
  return (
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
  );
};
export default Login;
