import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { articleApi } from "../../hooks/articleApi";

export interface Article {
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

const fetchAllArticles = createAsyncThunk(
  'article/fetchByIdStatus',
  async (thunkAPI) => {
    const response = await articleApi.list()
    if(response) {
      return response
    }
  }
)

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
  extraReducers(builder) {
    builder.addCase(fetchAllArticles.fulfilled, (state, action) => {
      if(action.payload){
        state.list = action.payload
      }
    })
  },
});

export const ArticleActions = {...ArticleSlice.actions, fetchAllArticles};
export const ArticleReducer = ArticleSlice.reducer;
