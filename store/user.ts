import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  username: string;
  accessToken: string;
}

const initialState: User = {
  username: '',
  accessToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (
      state: User,
      action: PayloadAction<{ username: string; accessToken: string }>,
    ) => {
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
    },
    setLogout: (state: User) => {
      state.username = '';
      state.accessToken = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
