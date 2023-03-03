import React from 'react';
import "../css/display.css";

const Display = (props) => {
    return (
        <div className='display-container'>
            <h1>{props.value}</h1>
        </div>
    )
}

export default Display;
