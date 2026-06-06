import { useState } from "react";
import axios from "axios";
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
      const res = await axios.put(
        `http://localhost:8000/api/v1/posts/${post._id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        }
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
      const res = await axios.post(
        `http://localhost:8000/api/v1/posts/${post._id}/comment`,
        {
          text: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
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
      await axios.delete(
        `http://localhost:8000/api/v1/posts/${post._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        }
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
      {/* Header */}

      <div className="post-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="avatar"
          className="avatar"
        />

        <h4 className="post-user">
          {post.username}
        </h4>
      </div>

      {/* Caption */}

      {post.caption && (
        <p className="post-caption">
          {post.caption}
        </p>
      )}

      {/* Image */}

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="post"
          className="post-image"
        />
      )}

      {/* Actions */}

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

      {/* Comment Box */}

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

      {/* Comments */}

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