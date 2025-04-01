import { instance } from "../libs/axios/instance";
import { getEnvVariable } from "./envs";

export async function uploadPdf(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", getEnvVariable("IPA_DINARY_UPD_PRE"));
  formData.append("cloud_name", getEnvVariable("IPA_DINARY"));
  try {
    const response = await instance.post(`/raw/upload`, formData);
    return response.data;
  } catch (error) {
    return error;
  }
}
