import Navbar from "../components/Navbar";
import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <CreatePost />
      <Feed />
    </div>
  );
}

export default Home;