import React, { useRef } from 'react'

import './Modal.scss'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

import db, { auth } from '../../firebase'
import { useHistory } from 'react-router';

const Modal = ({id, name, symbol, price,hideModal}) => {

  const quantityRef = useRef(null);
  const buingPriceRef = useRef(null);

  const history = useHistory()

  const addCoinToPortfolio = (e) => {
    e.preventDefault();

    const user = auth.currentUser;
  
    const coin  = {
      id,
      name,
      symbol,
      holding: quantityRef.current.value,
      buyingPrice: buingPriceRef.current.value,
    };

    if (!coin.holding || !coin.buyingPrice ){
      alert("wprowadz dane")}
    else {
      db
      .collection(`users/${user.uid}/portfolio`)
      .doc()
      .set(coin);
  
      hideModal();
      history.push('/portfolio')
      
      }
    }


  

  return ( 
    <div className="modal">

      <div className="modal__header">
        Add transaction
        <IconButton 
        onClick={hideModal}
        className="modal__exit"
        color="white"   
        size="small">
        <CloseIcon fontSize="large"/>
      </IconButton>
      </div>
      <div className="modal__cryptoName">
        {name}
        <span>{symbol}</span>
        </div>
      <form 
      
      action="submit" 
      className="modal__form">
        <label htmlFor="quantity">Quantity </label>
        <input 
          ref={quantityRef}
          id="quantity"
          type="number" 
          placeholder="0.00" />
        <label htmlFor="buyingPrice">Price Per Coin</label>
        <input 
          ref={buingPriceRef}
          id="buyingPrice"
          type="number" 
          placeholder={price.toFixed(2)} />
          <Button 
          onClick={addCoinToPortfolio}
          className="modal__button">Add</Button>
      </form>
    </div>
   );
}
 


export default Modal;