import { useEffect, useState } from "react";
import api from "../services/api";
import PostCard from "./PostCard";
import "../styles/feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get(
          "/posts/feed"
        );

        setPosts(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <h3 className="loading">
        Loading posts...
      </h3>
    );
  }

  return (
    <div className="feed-container">
      <div className="feed-header">
        <span className="feed-title">
          Recent Posts
        </span>

        <span className="feed-count">
          {posts.length} Posts
        </span>
      </div>

      {posts.length === 0 ? (
        <div className="no-posts">
          No posts available
        </div>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
          />
        ))
      )}
    </div>
  );
}

export default Feed;