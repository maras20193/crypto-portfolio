import React, {useState, useEffect} from 'react'

import './WalletCoin.scss'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import axios from '../../axios'

const WalletCoin = ({id,name, symbol,  buingPrice, holding, infoType}) => {

  const [coinData, setCoinData] = useState([])
  useEffect(()=> {
    async function fetchData(){
      const request = await axios.get(`/coins/${id}/ohlcv/today`);
      setCoinData(request.data[0])
    }
    fetchData()
  }, [])
  const price = coinData.close && coinData.close.toFixed(2);

  const profit = (((price / buingPrice) - 1) * 100).toFixed(2)

  const style = profit > 0 
  ? {color: 'green'}
  : {color: 'red'};

  const arrowIcon = profit > 0 
  ? <ArrowDropUpIcon/> 
  : <ArrowDropDownIcon/>

  return ( 
    <div className={infoType ? "walletCoin walletCoin--info" :"walletCoin"}>
      <div className="walletCoin__logo">
      {infoType ? null :<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" alt=""/> }
        </div>
      <div className="walletCoin__info">
        {infoType ? "Name" : name}
      </div>
      <div className="walletCoin__info">            {infoType ? null :symbol}
      </div>
      <div className="walletCoin__info walletCoin__info--price">
        {infoType ? "Price" : `$${price}`}
      </div>
      <div className="walletCoin__info 
      walletCoin__info--price">
        {infoType ? "Buying Price " :`$${buingPrice}`}
      </div>
      <div className="walletCoin__info walletCoin__info--holding">{infoType ? "Holding" :holding}
      <span>{symbol ? ` ${symbol}` : null}</span>
      </div>
      <div 
      className="walletCoin__info walletCoin__info--allPrice"
      style={style}
      >{infoType ? null : `$${price * holding}`}</div>
      {infoType
      ? <div className="walletCoin__info walletCoin__info--changeToday">
        Profit
      </div>
      :  <div className="walletCoin__info walletCoin__info--changeToday" 
      style={style}>
        {arrowIcon}
        {`${profit}%`}
      </div>}
     

    </div>
   );
}
 
export default WalletCoin;