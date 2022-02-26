type Card = "Amarilla" | "Roja" | "Azul"
type Team = "local" | "foreign"
type Type = "goal" | "card" | "foul"

interface Goal {
  minute: number
  team: Team
}

interface Cards {
  minute: number
  color: Card
  team: Team
}

interface Foul {
  minute: number
  team: Team
}

type Data = Array<Goal | Cards | Foul>

export interface ResponseData {
  minute: number
  type: Type
  color?: Card
  team: Team
}

interface ClubType {
  logo: string,
  name: string
}

interface TeamData {
  club: ClubType
  goals: number[]
  cards: ({ minute: number, color: Card })[]
  fouls: number[],
  logo: string
}

export interface Match {
  local: TeamData,
  foreign: TeamData,
  status: string,
  date: string,
  result: "X" | "1" |  "2",
  id: string
}

export const prepareData = (match: Match): ResponseData[] => {
  const parseTeam = (data: TeamData, team: Team): ResponseData[] => {
    const result: ResponseData[] = []

    data.cards.forEach(({ minute, color }) => {
      result.push({
        minute,
        color,
        team,
        type: "card"
      })
    });

    data.goals.forEach((minute) => {
      result.push({
        minute,
        team,
        type: "goal"
      })
    })

    data.fouls.forEach((minute) => {
      result.push({
        minute,
        team,
        type: "foul"
      })
    })

    return result;
  }
  return [...parseTeam(match.local, "local"), ...parseTeam(match.foreign, "foreign")].sort((a, b) => a.minute - b.minute)
}

