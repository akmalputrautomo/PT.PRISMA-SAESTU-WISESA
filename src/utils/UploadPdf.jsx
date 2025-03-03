import { instance } from "../libs/axios/instance";

export async function uploadPdf(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );
  formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);
  try {
    const response = await instance.post(`/raw/upload`, formData);
    return response.data;
  } catch (error) {
    console.error("Upload ke Cloudinary gagal", error);
    return error;
  }
}
