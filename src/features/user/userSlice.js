import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    LOG_IN: (state, action) => {
      state.user = action.payload
    },
    LOG_OUT: state => {
      state.user = null
    }
  }
})

export const { LOG_IN, LOG_OUT } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;