import React from 'react';
import "./style.css"

const Counter = () => {
    const [count, setCount] = React.useState(0);

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }

    function decrementCount() {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div className='counter--container'>
            <button
                className='count--btn'
                onClick={decrementCount}
            >
                -
            </button>

            <div className='count'>{count}</div>
            
            <button
                className='count--btn'
                onClick={incrementCount}
            >
                +
            </button>
        </div>
    )
}

export default Counter;
