import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
}

interface UserState {
  users: User[];
}

interface SliceType {
  name: string;
  initialState: UserState;
  reducers: {
    addUser: (
      state: UserState,
      action: PayloadAction<{ name: string }>
    ) => void;
    removeUser: (
      state: UserState,
      action: PayloadAction<{ id: string }>
    ) => void;
  };
}

const storedUser =
  typeof localStorage !== undefined ? localStorage.getItem("users") : null;
const initialState: UserState = {
  users: storedUser ? JSON.parse(storedUser) : [],
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string }>) => {
      const data = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.users.push(data);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    removeUser: (state, action: PayloadAction<{ id: string }>) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { addUser, removeUser } = slice.actions;

export default slice.reducer;
