import { configureStore } from "@reduxjs/toolkit";
import { articleReducer } from "./ducks/article";
import { authReducer } from "./ducks/auth";
import counterReducer from "./ducks/counter";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    article: articleReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
