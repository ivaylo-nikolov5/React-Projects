import React from 'react';
import "../css/numbers.css"

const Numbers = (props) => {
    return (
        <div className='calculatorNumbers'>
            <button 
            className='numberButton'
            value={7}
            >7</button>
            <button 
            className='numberButton'
            value={8}
            >8</button>
            <button 
            className='numberButton'
            value={9}
            >9</button>
            <button 
            className='numberButton'
            value={4}
            >4</button>
            <button 
            className='numberButton'
            value={5}
            >5</button>
            <button 
            className='numberButton'
            value={6}
            >6</button>
            <button 
            className='numberButton'
            value={1}
            >1</button>
            <button 
            className='numberButton'
            value={2}
            >2</button>
            <button 
            className='numberButton'
            value={3}
            >3</button>
            <button 
            className='numberButton'
            value={"."}
            >.</button>
            <button 
            className='numberButton'
            value={0}
            >0</button>
            <button 
            className='numberButton'
            value={"="}
            >=</button>
        </div>
    )
}

export default Numbers;
