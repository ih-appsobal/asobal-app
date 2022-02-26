import { create } from "./BaseService";

export interface Post {
  title: string
  content: string
  media: string
  visible: boolean
}

const http = create({
  useAccessToken: false,
  logoutOnUnauthorized: false,
})

export const list = (): Promise<Post[]> => {
  return http.get('/posts/');
}