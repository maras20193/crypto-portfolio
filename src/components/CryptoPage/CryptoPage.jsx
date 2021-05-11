import React, {useState,useEffect} from 'react'

import { useParams } from 'react-router-dom'

import axios from '../../axios'

import './CryptoPage.scss'

import ProgressBar from '../ProgressBar/ProgressBar'

// https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/historical?start=2020-05-10&end=2021-05-10

// https://api.coinpaprika.com/v1/tickers/btc-bitcoin

const CryptoPage = (props) => {
    const [historyData, setHistoryData] = useState();
    const [tickers, setTickers] = useState();
    const {id} = useParams();

    useEffect(() => {
        const date = new Date();
        const today = Math.floor(date.getTime() / 1000);
        const oneYearBefore = 
        Math.floor((date.getTime() - 31536000000)/1000);

        async function fetchData(){
            const request = await axios.get(`/coins/${id}/ohlcv/historical?start=${oneYearBefore}&end=${today}`);
            setHistoryData(request.data)
        }
        fetchData()
        

    }, [])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(`/tickers/${id}`);
            setTickers(request.data)
        }
        fetchData()
        

    }, [])

    console.log(historyData)
    console.log(tickers)

    const style = tickers && tickers.quotes.USD.percent_change_24h > 0 
        ? {
            backgroundColor: "green"
        }
        : {
            backgroundColor: "red"
        }

    const price = tickers 
        ? `$${(tickers.quotes.USD.price).toFixed(2)}` 
        : null;

    const change24h = tickers 
    ? `${(tickers.quotes.USD.percent_change_24h).toFixed(2)}%` 
    : null;

    return (
        <div className="cryptoPage">
            <div className="cryptoPage__container cryptoPage__mainInfo">
                <div className="cryptoPage__flexRow">
                <div className="cryptoPage__logoWrapper">
                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="" />
                </div>
                <div className="cryptoPage__name">{tickers && tickers.name}
                    <span>{tickers && tickers.symbol}</span>
                </div>
                </div>
                <div className="cryptoPage__flexRow">
                    <div className="cryptoPage__moreInfo">{`Rank #${tickers && tickers.rank}`}</div>
                    <div className="cryptoPage__moreInfo">Coin</div>
                </div>
                

            </div>
            <div className="cryptoPage__container cryptoPage__sideInfo">
                <div className="cryptoPage__flexRow">
                    <div className="cryptoPage__price">
                        {price}
                        <span 
                        className="cryptoPage__moreInfo"
                        style={style}>{change24h}</span>
                    </div>
                </div>
                <div className="cryptoPage__flexRow">
                    <ProgressBar 
                    low={50000}
                    high={80000}
                    now={65000}
                    size={150}
                    />
                </div>
            </div>
            <div className="cryptoPage__container cryptoPage__chartWrapper">

            </div>
        </div>
    )
}


export default CryptoPage
