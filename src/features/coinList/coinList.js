import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchCoin: 'bitcoin',
  coinList: null,
};

export const coinListSlice = createSlice({
  name: 'coinList',
  initialState,
  reducers: {
    SEARCH: (state, action) => {
      state.searchCoin = action.payload
    },
    SET_COIN_LIST: (state, action) => {
      state.coinList = action.payload
    }
  }
})

export const { SEARCH, SET_COIN_LIST } = coinListSlice.actions

export const selectSearchCoin = state => state.coinList.searchCoin

export const selectCoinList = state => state.coinList.coinList



export default coinListSlice.reducer