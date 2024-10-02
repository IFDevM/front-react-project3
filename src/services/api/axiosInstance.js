import axios from "axios";

const BASE_URL = "http://localhost:8001/";


export const axiosService = axios.create({

  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
  
});


// export const adminInstance = axios.create({
//    baseURL: BASE_URL,
//    headers: {
//       "Content-Type": "application/json",
//    },
// });

/**
 * Intercepteur pour ajouter le token d'authentification aux requêtes d'administration.
 * Cet intercepteur ajoute un en-tête 'Authorization' avec le token de l'utilisateur.
 */
// adminInstance.interceptors.request.use(
//   (request) => {
//     request.headers.Authorization = `Token ${getUser()?.token.trim()}`;
//     return request;
//   },
//   (error) => {
//     if (error.response) {
//       const apiError = error.response?.data;
//       return Promise.reject(apiError);
//     }
//     return Promise.reject(error);
//   }
// );