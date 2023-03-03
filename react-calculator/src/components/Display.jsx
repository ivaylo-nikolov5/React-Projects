import React from 'react';
import "../css/display.css";

const Display = (props) => {
    return (
        <div className='display-container'>
            {props.value}
        </div>
    )
}

export default Display;
