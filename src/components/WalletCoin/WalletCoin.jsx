import React from 'react'

import './WalletCoin.scss'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const WalletCoin = ({name, symbol, price, buingPrice, holding, infoType}) => {

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
      <div className="walletCoin__info">{infoType ? "Holding" :holding}
      </div>
      <div className="walletCoin__info walletCoin__info--price">
        {infoType ? "Price" : `$${price}`}
      </div>
      <div className="walletCoin__info 
      walletCoin__info--price">
        {infoType ? "Buying Price " :`$${buingPrice}`}
      </div>
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