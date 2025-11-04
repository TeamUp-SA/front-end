import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  withCredentials: true, // if you use cookies or session auth
})

// // Optional: set up interceptors -> for authorization, logging, whatever
// api.interceptors.response.use( 
// (config) => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (res) => res,
//   (err) => {
//     console.error("API Error:", err.response?.data || err.message)
//     return Promise.reject(err)
//   }
// )

export default api
