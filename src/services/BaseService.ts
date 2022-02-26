import axios from "axios";
import { getAccessToken, logout } from "../store/AcessTokenStore";

interface AxiosOptions {
  useAccessToken?: boolean
  logoutOnUnauthorized?: boolean
}

export const create = (opts: AxiosOptions = {}) => {
  const http = axios.create({
    baseURL: "https://ih-asobal-api.herokuapp.com/api",
    ...opts,
  });

  http.interceptors.request.use((request) => {
    if (request && request.headers) {
      if (opts.useAccessToken !== false) {
        request.headers['Authorization'] = `Bearer ${getAccessToken()}`;
      } else {
        delete request.headers['Authorization'];
      }
  
      return request;
    }
  });

  http.interceptors.response.use(
    (response) => response.data,
    (error: any) => {
      if (
        opts.logoutOnUnauthorized &&
        error.response &&
        401 === error.response.status
      ) {
        logout();
        return;
      } else if (error.response.status === 403) {
        window.location.assign("/");
      }

      return Promise.reject(error);
    }
  );

  return http;
};