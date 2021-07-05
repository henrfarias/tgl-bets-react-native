import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

const BearerSlice = createSlice({
  name: 'bearer',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => (state = action.payload),
    logout: (state) => (state = initialState),
  },
});

export const { login, logout } = BearerSlice.actions;

export default BearerSlice.reducer;