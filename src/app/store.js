import { configureStore } from '@reduxjs/toolkit';

import pageReducer from '../features/page/pageSlice'
import userReducer from '../features/user/userSlice';
import coinListReducer from '../features/coinList/coinList'

export const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
    coinList: coinListReducer,
  },
});
