import React from 'react'

import './Modal.scss'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Modal = ({name, symbol, price,hideModal}) => {
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
      <form action="submit" className="modal__form">
        <label htmlFor="quantity">Quantity </label>
        <input 
          id="quantity"
          type="number" 
          placeholder="0.00" />
        <label htmlFor="buyingPrice">Price Per Coin</label>
        <input 
          id="buyingPrice"
          type="number" 
          placeholder={price.toFixed(2)} />
          <Button 
          className="modal__button">Add</Button>
      </form>
    </div>
   );
}
 


export default Modal;