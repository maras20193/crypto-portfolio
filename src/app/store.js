import { configureStore } from '@reduxjs/toolkit';

import pageReducer from '../features/coinList/pageSlice'

export const store = configureStore({
  reducer: {
    page: pageReducer
  },
});
