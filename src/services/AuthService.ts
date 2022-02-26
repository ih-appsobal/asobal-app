import { create } from "./BaseService";

const http = create({
  useAccessToken: false,
  logoutOnUnauthorized: false,
})

export interface LoginBody {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
}

export const register = (body: Object) => {
  return http.post('/users', body)
}

export const login = (body: LoginBody): Promise<LoginResponse> => {
  return http.post('/users/login', body)
}