
import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import uploadOnCloudinary from "../utils/cloudinaryUpload.js";

// ================= CREATE POST =================
export const createPost = asyncHandler(async (req, res) => {
  const { caption } = req.body;

  let imageUrl = "";
  let videoUrl = "";

  // Upload Image
  if (req.files?.image?.[0]) {
    const image = await uploadOnCloudinary(
      req.files.image[0].path,
      "image"
    );

    imageUrl = image?.secure_url || "";
  }

  // Upload Video
  if (req.files?.video?.[0]) {
    const video = await uploadOnCloudinary(
      req.files.video[0].path,
      "video"
    );

    videoUrl = video?.secure_url || "";
  }

  if (!caption && !imageUrl && !videoUrl) {
    throw new ApiError(
      400,
      "Post must contain caption, image or video"
    );
  }

  const post = await Post.create({
    user: req.user._id,
    username: req.user.username,
    caption,
    imageUrl,
    videoUrl,
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      post,
      "Post created successfully"
    )
  );
});

// ================= FEED =================
export const getFeed = asyncHandler(async (req, res) => {
  const posts = await Post.find()
    .sort({ createdAt: -1 });

  return res.status(200).json(
    new ApiResponse(
      200,
      posts,
      "Feed fetched successfully"
    )
  );
});

// ================= LIKE / UNLIKE =================
export const toggleLike = asyncHandler(async (req, res) => {
  const { postId } = req.params;
   console.log("POST ID RECEIVED:", postId);


  const post = await Post.findById(postId);
   console.log("POST FOUND:", post);
  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  const alreadyLiked = post.likes.some(
    (id) => id.toString() === req.user._id.toString()
  );

  if (alreadyLiked) {
    post.likes = post.likes.filter(
      (id) => id.toString() !== req.user._id.toString()
    );
  } else {
    post.likes.push(req.user._id);
  }

  await post.save();

  return res.status(200).json(
    new ApiResponse(
      200,
      post,
      alreadyLiked
        ? "Post unliked successfully"
        : "Post liked successfully"
    )
  );
});

// ================= ADD COMMENT =================
export const addComment = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const { text } = req.body;

  if (!text) {
    throw new ApiError(
      400,
      "Comment text is required"
    );
  }

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  post.comments.push({
    user: req.user._id,
    username: req.user.username,
    text,
  });

  await post.save();

  return res.status(200).json(
    new ApiResponse(
      200,
      post,
      "Comment added successfully"
    )
  );
});


export const deletePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  if (
    post.user.toString() !==
    req.user._id.toString()
  ) {
    throw new ApiError(
      403,
      "You can delete only your own posts"
    );
  }

  await Post.findByIdAndDelete(postId);

  return res.status(200).json(
    new ApiResponse(
      200,
      {},
      "Post deleted successfully"
    )
  );
});