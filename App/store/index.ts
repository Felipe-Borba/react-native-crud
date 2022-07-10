import { configureStore } from "@reduxjs/toolkit";
import { ArticleReducer } from "./ducks/article";
import { authReducer } from "./ducks/auth";
import counterReducer from "./ducks/counter";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    article: ArticleReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
