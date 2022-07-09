import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
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

const initialState: UserState = {
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

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    test: (state: UserState, action: PayloadAction<string>) => {
      console.log(state, action);
    },
  },
});

export const { test } = userSlice.actions;
export default userSlice.reducer;
