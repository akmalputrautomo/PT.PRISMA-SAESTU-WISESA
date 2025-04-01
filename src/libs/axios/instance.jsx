import axios from "axios";
import { getEnvVariable } from "../../utils/envs";

export const instance = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${getEnvVariable("IPA_DINARY")}`,
});
