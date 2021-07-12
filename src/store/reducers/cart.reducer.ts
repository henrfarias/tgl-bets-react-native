import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGame } from '../../types/IGames';

export type PropsCart = {
  game: IGame;
  numbers: number[];
  current_price: number;
  created_at: string; 
}

const initialState = {
  openned: false,
  bets: [] as PropsCart[],
  total: 0,
};

const CartSlice = createSlice({
  name: 'bearer',
  initialState,
  reducers: {
    toggle: (state) => {
      state.openned = !state.openned;
    },
    addToCart: (state, action: PayloadAction<PropsCart>) => {
      state.bets.push({...action.payload});
      state.total = state.bets.reduce((acc, current) => {
        return acc = acc + current.current_price; 
      }, 0)
    }
  },
});

export const { toggle, addToCart } = CartSlice.actions;

export default CartSlice.reducer;