import { IGame } from "./IGames";

export interface IBet {
  id: number;
  user_id: number;
  game_id: number;
  numbers: number[];
  current_price: number;
  created_at: string;
  updated_at: string;
  game: IGame;
}