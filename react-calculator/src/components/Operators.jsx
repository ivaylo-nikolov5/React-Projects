import React from 'react'
import "../css/operators.css"
const Operators = () => {
    return (
        <div className='operatorButtons'>
            <button
                className='operatorButton'
                value={"/"}
            >/</button>
            <button
                className='operatorButton'
                value={"*"}
            >*</button>
            <button
                className='operatorButton'
                value={"+"}
            >+</button>
            <button
                className='operatorButton'
                value={"-"}
            >-</button>
        </div>
     )
}

export default Operators
