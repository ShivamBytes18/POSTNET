import "../config/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (
  localFilePath,
  resourceType = "auto"
) => {
  try {
    console.log("Uploading file:", localFilePath);

    if (!localFilePath) return null;
    
    console.log("Cloudinary Config:", cloudinary.config());
    const response = await cloudinary.uploader.upload(
      localFilePath,
      {
        resource_type: resourceType,
      }
    );

    console.log("Cloudinary Success:", response.secure_url);

    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
  console.log("FULL CLOUDINARY ERROR:");
  console.dir(error, { depth: null });

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export default uploadOnCloudinary;