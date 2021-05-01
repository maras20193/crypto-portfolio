import React from 'react'

import './Modal.scss'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Modal } from '@material-ui/core';

import {selectModalIsShown} from '../../features/coinList/pageSlice' 

const ModalMy = () => {
  return ( 
    // <div className="modal">
    //   <div className="modal__header">
    //     <p>Add Crypto</p>
    //     <IconButton color="primary" size="small">
    //     <CloseIcon fontSize="large"/>
    //   </IconButton>
    //   </div>
    //   to jest modal
    // </div>
    <>
    
    <Modal
      open={true}
      // onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div>fjhsdjfhdfh</div>
    </Modal>
</>
   );
}
 


export default ModalMy;