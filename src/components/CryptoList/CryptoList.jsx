import React, { useEffect, useState } from 'react'
import Crypto from '../Crypto/Crypto';

import './CryptoList.scss'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

import axios from '../../axios';
import requests from '../../requests'

import { useSelector, useDispatch } from 'react-redux'
import {
  selectPageIndex, 
  NEXT, 
  BACK, 
  } from '../../features/page/pageSlice'
import { selectSearchCoin,selectCoinList, SET_COIN_LIST } from '../../features/coinList/coinList';

const CryptoList = () => {
  const dispatch = useDispatch()

  const pageIndex = useSelector(selectPageIndex)
  const searchCoin = useSelector(selectSearchCoin)
  const coins = useSelector(selectCoinList);

  const handleNext = () => {
    dispatch(NEXT())
  }

  const handleBack = () => {
    dispatch(BACK())
  }

  const generateCoinList = (value) => {
    const coinsOnChoosenPage = coins && coins.slice(pageIndex * value)
    const coinsList = coinsOnChoosenPage && coinsOnChoosenPage.map((coin,index) => {
      while (index < value) {
        return (
          <Crypto
            key={coin.id}
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            rank={coin.rank}
          />
        )
      }
    })

    return coinsList
  }
  

  return ( 
    <div className="cryptoList__wrapper">
      <div className="cryptoList__header">
      </div>
      <ul className="cryptoList__mainList">
        {generateCoinList(10)}
      </ul>
      <div className="cryptoList__pagination">
      <IconButton
      onClick={handleBack}
      color="primary" 
      size="small"
      disabled={!pageIndex && true}>
        <ChevronLeftIcon fontSize="large" />
      </IconButton>
      <div className="cryptoList__pageNumber">{pageIndex + 1}</div>
      <IconButton
      onClick={handleNext}
      color="primary" 
      size="small">
        <ChevronRightIcon fontSize="large"/>
      </IconButton>
      </div>
    </div>
   );
}
 
export default CryptoList;