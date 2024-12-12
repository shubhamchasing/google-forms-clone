import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, 
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const formattedError = new Error(
        `status code: ${error.response.status}, message: ${error.response.data.message}`
      );
      throw formattedError;
    }
    throw error;
  }
);

export default instance