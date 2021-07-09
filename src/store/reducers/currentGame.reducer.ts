import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame } from '../../types/IGames';

const initialState = {
  game: {} as IGame,
  numbers: [] as number[],
};

const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
    setCurrentGame: (state, action: PayloadAction<IGame>) => {
      state.game = action.payload;
    },
    resetCurrentGame: (state) => (state = initialState),
    numbersHandler: (state, action: PayloadAction<number>) => {
      if(!state.game.type) {
        console.log('Escolha um game.')
        return;
      }
      if(state.numbers.length === 20) {
        console.log('Você marcou o máximo de números possíveis.');
        return;
      }
      if(state.numbers.includes(action.payload)) {
        state.numbers = state.numbers.filter((number) => number !== action.payload);
        return;
      }
			state.numbers.push(action.payload);
		},
  },
});

export const { setCurrentGame, resetCurrentGame, numbersHandler } = currentGameSlice.actions;

export default currentGameSlice.reducer;
