import React from 'react';
import "../css/calculator.css";
import Display from './Display';
import Numbers from './Numbers';
import Operators from './Operators';

const Calculator = () => {
    return (
        <div className='calculatorBodyContainer'>
            <Display />
            <div className='buttonsContainer'>
                <Numbers />
                <Operators />
            </div>
            <button className='clearButton'>Clear</button>
        </div>
    )
}

export default Calculator;
