import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
});

// Admin pages must always see fresh data (public lists are CDN-cached for ~1 min)
export const noCache = () => ({ params: { _: Date.now() } });

export default api;
