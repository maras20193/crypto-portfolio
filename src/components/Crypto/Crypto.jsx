import React, { useEffect, useState } from 'react'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import {selectModalIsShown} from '../../features/coinList/pageSlice' 


import './Crypto.scss'
import axios from '../../axios';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';

const Crypto = ({id,name, symbol, rank, walletType}) => {
  const [coinData, setCoinData] = useState([])
  const [modalIsShow,setModalIsShow] = useState(false)

  useEffect(()=> {
    async function fetchData(){
      const request = await axios.get(`/coins/${id}/ohlcv/today`);
      console.log(request.data)
      setCoinData(request.data[0])
    }
    fetchData()
  }, [])

  const showAddCryptoModal = () => {
    setModalIsShow(true)
  }
  const hideAddCryptoModal = () => {
    setModalIsShow(false)
  }

  const {close, open} = coinData;

  const price = close 
    ? close.toFixed(2)
    : null;

  const changeToday = ((close * 100 / open) - 100).toFixed(2);

  const style = changeToday > 0 
    ? {color: 'green'}
    : {color: 'red'};

  const arrowIcon = changeToday > 0 
    ? <ArrowDropUpIcon/> 
    : <ArrowDropDownIcon/>

  return ( 
    <div className="cryptoRow">
      <div className="cryptoRow__info cryptoRow__info--rank">{rank}</div> 
      <div className="cryptoRow__logo">
        <img 
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"

        // src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" 
        
        alt=""/>
      </div>
      <div className="cryptoRow__info">{name}</div>
      <div className="cryptoRow__info">{symbol}</div>
      <div className="cryptoRow__info cryptoRow__info--price">{`$${price}`}</div>
      <div 
      className="cryptoRow__info cryptoRow__info--changeToday" 
      style={style}>
        {arrowIcon}
        {`${changeToday}%`}
      </div>
      <IconButton 
      onClick={showAddCryptoModal}
      color="primary" 
      size="small">
        <AddIcon fontSize="large"/>
      </IconButton>
      {modalIsShow 
      ? <Modal 
        id={id}
        name={name}
        symbol={symbol}
        price={close}
        hideModal={hideAddCryptoModal}/> 
      : null}
      
    </div> );
}
 
export default Crypto;