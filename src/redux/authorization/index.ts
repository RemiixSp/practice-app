import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from './types';
import { getUserFromLS } from './getUserFromLS';

const initialState: AuthType = {
  isAuthorized: getUserFromLS().isAuthorized,
  userName: getUserFromLS().userName,
};

export const authorizationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const json = JSON.stringify({
        isAuthorized: true,
        userName: action.payload,
      });
      localStorage.setItem('user', json);

      return {
        ...state,
        isAuthorized: true,
        userName: action.payload,
      };
    },
    signOut: (state) => {
      localStorage.removeItem('user');
      return {
        ...state,
        isAuthorized: false,
        userName: '',
      };
    },
  },
});

export const { login, signOut } = authorizationSlice.actions;

export default authorizationSlice.reducer;
