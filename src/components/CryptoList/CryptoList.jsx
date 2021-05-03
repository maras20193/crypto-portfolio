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
  CHOOSE_PAGE } from '../../features/coinList/pageSlice'

const CryptoList = () => {
  const [coins, setCoins] = useState([]);
  // const [pageIndex, setPageIndex] = useState(1)
  const dispatch = useDispatch()
  const pageIndex = useSelector(selectPageIndex)

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchCoins);
      console.log(request)
      setCoins(request.data)
    }
    fetchData()
    console.log(coins)
    console.log('rrrr')
  }, [])

  const handleNext = () => {
    dispatch(NEXT())
  }

  const handleBack = () => {
    dispatch(BACK())
  }



  const generateCoinList = (value) => {
    const coinsOnChoosenPage = coins.slice(pageIndex * value)
    const coinsList = coinsOnChoosenPage.map((coin,index) => {
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