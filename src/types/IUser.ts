import { IBet } from "./IBet";

export interface IUser {
  id: number;
  username: string;
  email: string;
  token?: string;
  token_created_at?: string;
  created_at?: string;
  updated_at?: string;
  bets: IBet[];
}