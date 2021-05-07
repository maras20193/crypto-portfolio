import React, { useState, useEffect }  from 'react'

import './WalletList .scss'
import '../WalletCoin/WalletCoin.scss'
import WalletCoin from '../WalletCoin/WalletCoin'

import db, { auth } from '../../firebase'

const WalletList = () => {
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const user = auth.currentUser;

    db
    .collection(`users/${user.uid}/portfolio`)
    .get()
    .then(response => setPortfolio(response.docs))

  }, [])

  const portfolioList = portfolio.map(coin => {
    const {
      id,
      name,
      symbol,
      holding,
      buyingPrice} = coin.data();

      return (
        <WalletCoin
          key={id}
          id={id}
          name={name}
          holding={holding}
          symbol={symbol}
          buingPrice={buyingPrice}
          price={22}
          infoType={false}
    />)
  })

  return ( 
    <div className="walletList">
      <WalletCoin infoType={true}/>
      <div className="walletList__list">
      {portfolioList}
      </div>
      </div>
    );
}
 
export default WalletList;