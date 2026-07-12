// import {
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// //import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";

// function App() {
//   const token = localStorage.getItem("token");

//   return (
//     <Routes>

//       <Route
//         path="/signup"
//         element={<Signup />}
//       />

//       <Route
//         path="/"
//         element={
//           token ? (
//             <Home />
//           ) : (
//             <Navigate to="/signup" />
//           )
//         }
//       />
//     </Routes>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;