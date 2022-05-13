import "./styles.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Login from "./pages/Login";
import Restaurants from "./pages/Restaurants";

const App = () => {
  const styles = {
    appBar: {
      backgroundColor: "#ff7f50",
      color: "#ffffff",
      textAlign: "center"
    }
  };

  return (
    <>
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
          style={{ border: "2px dotted #1a1a1a", padding: "5px", margin: 5 }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurants/:resid/menus" element={<MenuPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
