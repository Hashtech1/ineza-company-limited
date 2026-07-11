import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user.types";

interface UserState {
  list: User[];
  selected: User | null;
  isLoading: boolean;
}

const initialState: UserState = {
  list: [],
  selected: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.list = action.payload;
    },
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selected = action.payload;
    },
    setUsersLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUsers, setSelectedUser, setUsersLoading } = userSlice.actions;
export default userSlice.reducer;
