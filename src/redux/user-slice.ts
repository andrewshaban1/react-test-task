import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user.type';

type UserState = {
  users: User[];
};

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteUser(state, action: PayloadAction<User>) {
      state.users = state.users.filter((user) => user.id != action.payload.id);
    },
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    filterUsers(state, action: PayloadAction<User[]>) {
      const payloadIds = action.payload.map((user) => user.id);
      state.users = state.users.filter((user) => payloadIds.includes(user.id));
    },
  },
});

export const { deleteUser, setUsers, filterUsers } = userSlice.actions;
