import React from 'react'

import './ProgressBar.scss'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const ProgressBar = ({low, high, now, size}) => {

    if (now > high) high = now;

    const fillPixels = ((now - low) / (high- low)) * size;
    const barSizeStyle = {
        width: `${size}px`,
    }
    const fillWidthStyle = {
        width: `${fillPixels}px`,
    }

    const arrowPositionStyle = {
        // 12px Icon svg offset
        left: `${fillPixels - 12}px`
    }

    return (
    <div className="progressBar">
        <div className="progressBar__info">
            Low:<span>{`$${low}`}</span>
        </div>
        <div className="progressBar__bar" style={barSizeStyle}>
            <span className="progressBar__fill" style={fillWidthStyle}></span>
            <ArrowDropUpIcon 
            style={arrowPositionStyle}
                className="progressBar__arrow" 
            />
        </div>
        <div className="progressBar__info">
            High:<span>{`$${high}`}</span>
        </div>
    </div>
    )
}


export default ProgressBar
