// import express from "express";
// import verifyJWT from "../middleware/auth.middleware.js";
// import { upload } from "../middleware/multer.middleware.js";
// import { createPost } from "../controllers/post.controller.js";

// const router = express.Router();

// router.post(
//   "/create",
//   verifyJWT,
//   upload.fields([
//     {
//       name: "image",
//       maxCount: 1,
//     },
//     {
//       name: "video",
//       maxCount: 1,
//     },
//   ]),
//   createPost
// );

// export default router;


import { Router } from "express";
import verifyJWT from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

import {
  createPost,
  getFeed,
  toggleLike,
  addComment,
  deletePost
} from "../controllers/post.controller.js";

const router = Router();

router.post(
  "/create",
  verifyJWT,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  createPost
);

router.get("/feed", getFeed);

router.put(
  "/:postId/like",
  verifyJWT,
  toggleLike
);

router.post(
  "/:postId/comment",
  verifyJWT,
  addComment
);

router.delete(
  "/:postId",
  verifyJWT,
  deletePost
);

export default router;