import { create } from "./BaseService";

export interface Club {
  id: string
  logo: string
  name: string
  rrss: { twitter?: string, instagram?: string, facebook?: string, youtube?: string }
  address: string
  background: string
}

const http = create({
  useAccessToken: false,
  logoutOnUnauthorized: false,
})

export const list = (): Promise<Club[]> => {
  return http.get('/clubs')
}