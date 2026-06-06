import { useState } from "react";
import api from "../services/api";
import "../styles/postCard.css";

import {
  FaHeart,
  FaComment,
  FaTrash,
} from "react-icons/fa";

function PostCard({ post }) {
  const [likes, setLikes] = useState(
    post.likes.length
  );

  const [comments, setComments] = useState(
    post.comments || []
  );

  const [commentText, setCommentText] =
    useState("");

  const handleLike = async () => {
    try {
      const res = await api.put(
        `/posts/${post._id}/like`
      );

      setLikes(
        res.data.data.likes.length
      );
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to like post"
      );
    }
  };

  const handleComment = async () => {
    if (!commentText.trim()) return;

    try {
      const res = await api.post(
        `/posts/${post._id}/comment`,
        {
          text: commentText,
        }
      );

      setComments(
        res.data.data.comments
      );

      setCommentText("");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to add comment"
      );
    }
  };

  const handleDelete = async () => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this post?"
      );

    if (!confirmDelete) return;

    try {
      await api.delete(
        `/posts/${post._id}`
      );

      alert(
        "Post deleted successfully"
      );

      window.location.reload();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to delete post"
      );
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <div
          className="avatar"
          style={{
            backgroundColor: `hsl(${
              post.username.charCodeAt(0) * 17
            }, 70%, 50%)`,
          }}
        >
          {post.username
            ?.charAt(0)
            .toUpperCase()}
        </div>

        <h4 className="post-user">
          {post.username}
        </h4>
      </div>

      {post.caption && (
        <p className="post-caption">
          {post.caption}
        </p>
      )}

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="post"
          className="post-image"
        />
      )}

      <div className="post-actions">
        <button
          className="action-btn"
          onClick={handleLike}
        >
          <FaHeart />
          <span>{likes}</span>
        </button>

        <button className="action-btn">
          <FaComment />
          <span>
            {comments.length}
          </span>
        </button>

        <button
          className="action-btn delete-btn"
          onClick={handleDelete}
        >
          <FaTrash />
          <span>Delete</span>
        </button>
      </div>

      <div className="comment-box">
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) =>
            setCommentText(
              e.target.value
            )
          }
        />

        <button
          onClick={handleComment}
        >
          Post
        </button>
      </div>

      <div className="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="comment"
            >
              <strong>
                {comment.username}
              </strong>

              <p>{comment.text}</p>
            </div>
          ))
        ) : (
          <p className="no-comments">
            No comments yet
          </p>
        )}
      </div>
    </div>
  );
}

export default PostCard;