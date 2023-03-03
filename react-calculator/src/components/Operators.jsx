import React from 'react'
import "../css/operators.css"
const Operators = (props) => {
    return (
        <div className='operatorButtons'>
            <button
                className='operatorButton'
                value={"/"}
                onClick={props.handleClick}
            >/</button>
            <button
                className='operatorButton'
                value={"*"}
                onClick={props.handleClick}
            >*</button>
            <button
                className='operatorButton'
                value={"+"}
                onClick={props.handleClick}
            >+</button>
            <button
                className='operatorButton'
                value={"-"}
                onClick={props.handleClick}
            >-</button>
        </div>
     )
}

export default Operators
