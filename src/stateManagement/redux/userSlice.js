import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   storeUser: (state, action) => {
      state.user = action.payload.user;
   },
   getUserById: (state, action) => {
    const id = action.payload.id;
    state.user.find(item => item.id === id);
   }
  }
});

export const {
  storeUser,
  getUserById
} = userSlice.actions;
export const getUser = state => state.users.user;
export default userSlice.reducer;