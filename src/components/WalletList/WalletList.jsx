import React from 'react'

import './WalletList .scss'
import '../WalletCoin/WalletCoin.scss'
import WalletCoin from '../WalletCoin/WalletCoin'

const WalletList = () => {
  const portfel = [
    {id:"btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC", 
    holding: 0.05,
    buyingPrice: 11500,
    price: 47500},
    {id:'eth-etherum',
    name: "Etherum", 
    symbol: "ETH",
    holding: 2,
    buyingPrice: 290,
    price: 3100},
    {id:'ada-cardano',
    name: "Cardano", 
    symbol: "ADA",
    holding: 300,
    buyingPrice: 0.09,
    price: 1.5}
  ]

  const walletCoins = portfel.map(coin => {
    return <WalletCoin
    key={coin.id}
    name={coin.name}
    holding={coin.holding}
    symbol={coin.symbol}
    buingPrice={coin.buyingPrice}
    price={coin.price}
    infoType={false}
  />
  })
  
  return ( 
    <div className="walletList">
      <WalletCoin infoType={true}/>
      <div className="walletList__list">{walletCoins}</div>
      </div>
    );
}
 
export default WalletList;