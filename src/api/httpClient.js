import axios from 'axios';
import { ADMIN_ENDPOINT } from '../config/api';

const httpClient = axios.create({
  withCredentials: true,
  baseURL: ADMIN_ENDPOINT
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const response = error.response;
    let convertedError = error;

    try {

      if (response) {
       if (response.status === 500) {
          convertedError = new Error(response.data);
        }
      }
      return Promise.reject(convertedError);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export default httpClient;
