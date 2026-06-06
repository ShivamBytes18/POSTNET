import { useState } from "react";
import api from "../services/api";
import { FaCamera, FaSmile } from "react-icons/fa";
import "../styles/createPost.css";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("caption", caption);

      if (image) {
        formData.append("image", image);
      }

      await api.post(
        "/posts/create",
        formData
      );

      setCaption("");
      setImage(null);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-post-card">
      <div className="create-post-header">
        <h2>Create Post</h2>

        <div className="post-tabs">
          <button className="active-tab">
            All Posts
          </button>

          <button>
            Promotions
          </button>
        </div>
      </div>

      <textarea
        placeholder="What's on your mind?"
        value={caption}
        onChange={(e) =>
          setCaption(e.target.value)
        }
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="preview"
          className="preview-image"
        />
      )}

      <div className="post-footer">
        <div className="left-icons">
          <label>
            <FaCamera />

            <input
              type="file"
              hidden
              onChange={(e) =>
                setImage(e.target.files[0])
              }
            />
          </label>

          <FaSmile />
        </div>

        <button
          className="post-btn"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;