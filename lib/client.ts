import axios from "axios";
import { BASE_URL } from "./constants";
export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + process.env.EXPO_PUBLIC_STRAPI_API_KEY,
  },
});
