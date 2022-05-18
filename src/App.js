import "./styles.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import MenuPageWithReducer from "./pages/MenuPageWithReducer";
import Login from "./pages/Login";
import Restaurants from "./pages/Restaurants";
import { useState } from "react";
import authContext from "./utils/authContext";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./store/Menupage/Reducer";

const App = () => {
  const styles = {
    appBar: {
      backgroundColor: "#ff7f50",
      color: "#ffffff",
      textAlign: "center"
    }
  };
  const [token, setToken] = useState("");
  const store = createStore(Reducer);

  return (
    <>
      <ReduxProvider store={store}>
        <authContext.Provider value={{ token, setToken }}>
          <Router>
            <div style={styles.appBar}>
              <h1>Swiggy</h1>
            </div>
            <ul style={{ display: "flex", justifyContent: "space-around" }}>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/restaurants">Restaurants</Link>
              </li>
            </ul>
            <div
              style={{
                border: "2px dotted #1a1a1a",
                padding: "5px",
                margin: 5
              }}
            >
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route
                  path="/restaurants/:resid/menus"
                  element={<MenuPageWithReducer />}
                />
              </Routes>
            </div>
          </Router>
        </authContext.Provider>
      </ReduxProvider>
    </>
  );
};

export default App;
