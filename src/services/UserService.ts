import { create } from "./BaseService";

const http = create({
  useAccessToken: true,
  logoutOnUnauthorized: true,
})

export interface User {
  id: string
  name: string
  surname: string
  age: number
  email: string
  country: string
  ccaa?: string
  gender: string
}

export const setClub = (body: Object) => {
  return http.patch('/users/me/club', body)
}

export const getUserInfo = (): Promise<User> => {
  return http.get('/users/me')
}

