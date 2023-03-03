import React from 'react';
import "../css/numbers.css"

const Numbers = (props) => {
    return (
        <div className='calculatorNumbers'>
            <button 
            className='numberButton'
            value={7}
            onClick={props.handleClick}
            >7</button>
            <button 
            className='numberButton'
            value={8}
            onClick={props.handleClick}
            >8</button>
            <button 
            className='numberButton'
            value={9}
            onClick={props.handleClick}
            >9</button>
            <button 
            className='numberButton'
            value={4}
            onClick={props.handleClick}
            >4</button>
            <button 
            className='numberButton'
            value={5}
            onClick={props.handleClick}
            >5</button>
            <button 
            className='numberButton'
            value={6}
            onClick={props.handleClick}
            >6</button>
            <button 
            className='numberButton'
            value={1}
            onClick={props.handleClick}
            >1</button>
            <button 
            className='numberButton'
            value={2}
            onClick={props.handleClick}
            >2</button>
            <button 
            className='numberButton'
            value={3}
            onClick={props.handleClick}
            >3</button>
            <button 
            className='numberButton'
            value={"."}
            onClick={props.handleClick}
            >.</button>
            <button 
            className='numberButton'
            value={0}
            onClick={props.handleClick}
            >0</button>
            <button 
            className='numberButton'
            value={"="}
            onClick={props.handleClick}
            >=</button>
        </div>
    )
}

export default Numbers;
