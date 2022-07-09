import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
