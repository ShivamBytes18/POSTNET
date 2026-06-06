// import axios from "axios";

// function PostCard({ post }) {

//   const handleLike = async () => {
//     await axios.put(
//       `http://localhost:8000/api/v1/posts/${post._id}/like`,
//       {},
//       {
//         headers: {
//           Authorization:
//             `Bearer ${localStorage.getItem("token")}`
//         }
//       }
//     );
//   };

//   return (
//     <div className="post-card">

//       <h4>{post.username}</h4>

//       <p>{post.caption}</p>

//       {post.imageUrl && (
//         <img
//           src={post.imageUrl}
//           alt=""
//         />
//       )}

//       <div className="actions">

//         <button onClick={handleLike}>
//           ❤️ {post.likes.length}
//         </button>

//         <button>
//           💬 {post.comments.length}
//         </button>

//       </div>

//     </div>
//   );
// }

// export default PostCard;
import axios from "axios";
import "../styles/postCard.css";
import { FaHeart, FaComment } from "react-icons/fa";

function PostCard({ post }) {
  const handleLike = async () => {
    try {
      await axios.put(
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

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">

        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="avatar"
          className="avatar"
        />

        <div>
          <h4 className="post-user">
            {post.username}
          </h4>
        </div>

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
          <span>
            {post.likes.length}
          </span>
        </button>

        <button className="action-btn">
          <FaComment />
          <span>
            {post.comments.length}
          </span>
        </button>

      </div>
    </div>
  );
}

export default PostCard;