import { create } from "./BaseService";

export interface Notification {
  post: string,
  read: boolean,
  id: string,
  message: string,
  position?: number
}

const http = create({
  useAccessToken: true,
  logoutOnUnauthorized: true,
})

export const list = (): Promise<Notification[]> => {
  return http.get('/notifications');
}

export const edit = (id: string) => {
  return http.patch(`/notifications/${id}`);
}

export const deleteId = (id: string) => {
  return http.delete(`/notifications/${id}`);
}