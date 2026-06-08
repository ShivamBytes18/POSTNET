import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/"
        element={
          token ? (
            <Home />
          ) : (
            <Navigate to="/signup" />
          )
        }
      />
    </Routes>
  );
}

export default App;