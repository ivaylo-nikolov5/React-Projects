import React from 'react'
import "../css/degreesDisplay.css";

const DegreesDisplay = (props) => {
    return (
        <div className='degreesDisplayContainer'>
            <h1>{props.temp}°C</h1>
        </div>
    )
}

export default DegreesDisplay
