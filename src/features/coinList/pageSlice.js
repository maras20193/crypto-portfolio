import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  showingPageIndex: 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    NEXT: state => {
      state.showingPageIndex +=1;
    },
    BACK: state => {
      state.showingPageIndex -=1;
    },
    CHOOSE_PAGE: (state, action) => {
      state.showingPageIndex = action.payload
    }
  }
})

export const { NEXT, BACK, CHOOSE_PAGE } = pageSlice.actions

export const selectPageIndex = state => state.page.showingPageIndex

export default pageSlice.reducer