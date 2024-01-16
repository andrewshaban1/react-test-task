import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user-slice';
import { authSlice } from './auth-slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
