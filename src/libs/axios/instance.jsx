import axios from "axios";

export const instance = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${
    import.meta.env.VITE_CLOUDINARY_NAME
  }`,
});
