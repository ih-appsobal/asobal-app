import { Match } from './../components/views/matchDetails/utils';
import { create } from "./BaseService";

const http = create({
  useAccessToken: true,
  logoutOnUnauthorized: true
})

export const getMatch = (id: string): Promise<Match> => {
  return http.get(`/matches/${id}`);
}

export const getMatches = (id: number): Promise<Match[]> => {
  return http.get(`/matches/fixture/${id}`);
}