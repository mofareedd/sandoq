import axios from "axios";
export const client = axios.create({
  baseURL: "http://localhost:1337",
  headers: {
    Authorization: "Bearer " + process.env.EXPO_PUBLIC_STRAPI_API_KEY,
  },
});
