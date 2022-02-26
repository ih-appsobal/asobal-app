import { create } from "./BaseService";

const http = create({
  useAccessToken: false,
  logoutOnUnauthorized: false,
})

export const register = (body: Object) => {
  return http.post('/users', body)
}