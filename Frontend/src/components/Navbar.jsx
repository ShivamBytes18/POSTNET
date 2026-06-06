import "../styles/navbar.css";
import {
  FaBell,
  FaSearch,
  FaMoon,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    const token =
      localStorage.getItem("token");

    await axios.post(
      "http://localhost:8000/api/v1/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.log(error);
  } finally {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/signup", {
      replace: true,
    });
  }
};

  return (
    <div className="navbar-container">

      <div className="navbar-top">

        <h1 className="logo">
          POSTNET
        </h1>

        <div className="navbar-right">

          <div className="coin-box">
            ⭐ 50
          </div>

          <div className="wallet-box">
            ₹0.00
          </div>

          <FaBell className="icon" />

          <FaUserCircle className="profile-icon" />

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>

        </div>

      </div>

      <div className="search-row">

        <input
          type="text"
          placeholder="Search posts, users..."
          className="search-input"
        />

        <button className="circle-btn">
          <FaSearch />
        </button>

        <button className="circle-btn">
          <FaMoon />
        </button>

        <FaUserCircle className="search-profile" />

      </div>

    </div>
  );
}

export default Navbar;