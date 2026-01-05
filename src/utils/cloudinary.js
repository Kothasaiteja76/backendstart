import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**                                
 * Upload image to Cloudinary
 * @param {string} localFilePath - path of file on local system
 */
const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded successfully:", response.secure_url);

    // remove file from local storage after upload
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // delete local file if upload fails
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    console.error("Cloudinary upload error:", error);
    return null;
  }
};

export { uploadCloudinary };
