import { create } from "./BaseService";

export interface Post {
  title: string
  content: string
  media: string
  visible: boolean
  id: string
}

const http = create({
  useAccessToken: false,
  logoutOnUnauthorized: false,
})

export const list = (): Promise<Post[]> => {
  return http.get('/posts/');
}

export const getById = (id: string): Promise<Post>  => {
  return http.get(`/posts/${id}`);
}