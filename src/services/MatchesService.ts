import { MATCHES } from '../constants/data';
import { Match } from './../components/views/matchDetails/utils';
import { create } from "./BaseService";

const http = create({
  useAccessToken: true,
  logoutOnUnauthorized: true
})

export const getMatch = (id: string): Promise<Match> => {
  return Promise.resolve(MATCHES[1])
  // return http.get(`/matches/${id}`)
}