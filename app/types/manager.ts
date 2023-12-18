import { Score } from "./score";
import { Team } from "./team";

export type Manager = {
    teams: Team[];
    scores: Score[];
}