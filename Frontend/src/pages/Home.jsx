// import Navbar from "../components/Navbar.jsx";
// import CreatePost from "../components/CreatePost.jsx";
// import Feed from "../components/Feed.jsx";
// import "../styles/home.css";

// function Home() {
//   return (
//     <div className="home">
//       <Navbar />
//       <CreatePost />
//       <Feed />
//     </div>
//   );
// }

// export default Home;
import "../styles/home.css";
import Navbar from "../components/Navbar.jsx";
import Feed from "../components/Feed.jsx";
function Home() {
  return (
    <div>
      <Navbar/>
      <Feed/>
    </div>
  );
}

export default Home;