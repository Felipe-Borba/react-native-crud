import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Article {
  id: string;
  title: string;
  description: string;
  body: string;
  thumbnail: string;
}

interface ArticleState {
  list: Article[];
}

const initialState: ArticleState = {
  list: [],
};

const ArticleSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addArticle: (state: ArticleState, action: PayloadAction<Article>) => {
      state.list.push(action.payload);
    },
    removeArticle: (state: ArticleState, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        (article) => article.id !== action.payload
      );
    },
  },
});

export const ArticleActions = ArticleSlice.actions;
export const ArticleReducer = ArticleSlice.reducer;
