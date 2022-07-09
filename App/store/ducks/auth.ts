import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  access: {
    token: string;
    refresh_token: string;
  };
  user: {
    id: string;
    username: string;
    email: string;
    created_at: string;
  };
}

const initialState: AuthState = {
  isLoggedIn: false,
  access: {
    token: "",
    refresh_token: "",
  },
  user: {
    id: "",
    username: "",
    email: "",
    created_at: "",
  },
};

const AuthSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state: AuthState, action: PayloadAction<AuthState>) => {
      state = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state: AuthState) => {
      state = initialState;
    },
  },
});

export const authActions = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
