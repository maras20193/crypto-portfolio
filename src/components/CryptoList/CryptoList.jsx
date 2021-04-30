import React, { useEffect, useState } from 'react'
import Crypto from '../Crypto/Crypto';

import './CryptoList.scss'

import axios from '../../axios';
import requests from '../../requests'

const CryptoList = () => {
  const [coins, setCoins] = useState([]);

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

  const generateCoinList = (value) => {
    const coinsList = coins.map((coin,index) => {
      while (index < value) {
        return (
          <Crypto
            key={coin.id}
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
          />
        )
      }
    })
    return coinsList
  }
  

  return ( 
    <div className="cryptoList__wrapper">
      <ul className="cryptoList__header">
      </ul>
      <ul className="cryptoList__mainList">
        {generateCoinList(10)}
      </ul>
    </div>
   );
}
 
export default CryptoList;