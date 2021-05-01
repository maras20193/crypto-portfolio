import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  showingPageIndex: 0,
  modalIsShow: false,
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
    TOGGLE_MODAL: state => {
      state.modalIsShow = !state.modalIsShow
    }
  }
})

export const { NEXT, BACK, CHOOSE_PAGE } = pageSlice.actions

export const selectPageIndex = state => state.page.showingPageIndex

export const selectModalIsShown = state => state.page.modalIsShow 

export default pageSlice.reducer