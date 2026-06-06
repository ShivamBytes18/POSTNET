import "../styles/navbar.css";
import {
  FaBell,
  FaSearch,
  FaMoon,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar-container">

      <div className="navbar-top">

        <h1 className="logo">
          Social
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