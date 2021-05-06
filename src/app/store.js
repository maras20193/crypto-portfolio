import { configureStore } from '@reduxjs/toolkit';

import pageReducer from '../features/coinList/pageSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer
  },
});
