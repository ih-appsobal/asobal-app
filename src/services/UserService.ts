import { create } from "./BaseService";

const http = create({
  useAccessToken: true,
  logoutOnUnauthorized: true,
})

export const setClub = (body: Object) => {
  return http.patch('/users/me/club', body)
}