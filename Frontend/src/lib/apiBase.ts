import axios from "axios";

export const API_BASE = "http://localhost:4000";

export const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
})

let refreshing = false;
let queue: Array<() => void> = [];

api.interceptors.response.use(
  (res) => res,
  async(err) => {
    const original = err.config;
    if (err.response?.status === 401 && !original._retry) {
      if (refreshing) {
        await new Promise<void>((r) => queue.push(r));
        return api(original);
      }
      original._retry = true;
      try {
        refreshing = true;
        const r = await api.post("/auth/refresh");
        localStorage.setItem("accessToken", r.data.accessToken);
        
        queue.forEach((fn) => fn());
        queue = [];
        return api(original);
      } finally {
        refreshing = false;
      }
    }
    return Promise.reject(err);
  }
)