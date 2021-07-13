import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame } from '../../types/IGames';

const initialState = [] as IGame[];

const GamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    loadGames: (state, action: PayloadAction<IGame[]>) => {
      return state = [...action.payload]
    },
  },
});

export const { loadGames } = GamesSlice.actions;

export default GamesSlice.reducer;