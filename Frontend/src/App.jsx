// import React from 'react'
// import {Routes , Route} from 'react-router-dom'
// import Home from "./pages/Home.jsx"
// import Login from "./pages/Login.jsx"
// function App() {
//   return (
//     <Routes>
//       <Route path = '/' element={<Home/>}/>
//        <Route path = '/login' element={<Login/>}/>
//     </Routes>
//   )
// }

// export default App

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
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;