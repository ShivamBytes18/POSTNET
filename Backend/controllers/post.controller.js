import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import uploadOnCloudinary from "../utils/cloudinaryUpload.js";

export const createPost = asyncHandler(async (req, res) => {
 
   console.log("FILES:", req.files);
  console.log("BODY:", req.body);
  const { caption } = req.body;

  let imageUrl = "";
  let videoUrl = "";

 if (req.files?.image?.[0]) {
  console.log("IMAGE PATH:", req.files.image[0].path);

  const image = await uploadOnCloudinary(
    req.files.image[0].path,
    "image"
  );

  console.log("IMAGE RESPONSE:", image);

  imageUrl = image?.secure_url || "";
}

  if (req.files?.video?.[0]) {
    const video = await uploadOnCloudinary(
      req.files.video[0].path,
      "video"
    );

    videoUrl = video?.secure_url || "";
  }

  if (!imageUrl && !videoUrl && !caption) {
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