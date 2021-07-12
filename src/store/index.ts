import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user.reducer';
import gamesReducer from './reducers/games.reducer';
import loadReducer from './reducers/load.reducer';
import bearerReducer from './reducers/bearer.reducer';
import currentGameReducer from './reducers/currentGame.reducer';
import cartReducer from './reducers/cart.reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
    load: loadReducer,
    bearer: bearerReducer,
    current_game: currentGameReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
