import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export const fetchMovies = async (query: string) => {
  const { data } = await axios.get(`${API_BASE_URL}/api/search`, {
    params: { query },
  });
  return data;
};
