import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/IUser';

const initialState = {} as IUser;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<IUser>) => {
      return (state = { ...action.payload });
    },
    userLoggedOut: (state) => {
      return (state = initialState);
    },
  },
});

export const { userLoggedIn, userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
