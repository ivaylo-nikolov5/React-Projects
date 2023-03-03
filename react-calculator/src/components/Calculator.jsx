import React from 'react';
import "../css/calculator.css";
import Display from './Display';
import Numbers from './Numbers';
import Operators from './Operators';

const operators = ["*", "/", "+", "-"]; 
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const Calculator = () => {
    const [displayValue, setDisplayValue] = React.useState("");
    const [prevDisplayValue, setPrevDisplayValue] = React.useState(0);
    const [operator, setOperator] = React.useState("");

    function handleClick(event) {
        const { value } = event.target;
        if (value === "." && (displayValue.includes(".") || displayValue === "")) return;
        if (numbers.includes(value)) {
            if (displayValue.length >= 16 || (displayValue === "0" && value === "0")) return;
            setDisplayValue(oldValue => {
                return oldValue + value;
            })
        } else if (operators.includes(value)) {
            if (displayValue === "") return
            setPrevDisplayValue(Number(displayValue));
            setDisplayValue("");
            setOperator(value);
        } else {
            if (operator === "") return;

            if (operator === "+") 
            setDisplayValue(prevDisplayValue + Number(displayValue));
            if (operator === "-") 
            setDisplayValue(prevDisplayValue - Number(displayValue));
            if (operator === "*") 
            setDisplayValue(prevDisplayValue * Number(displayValue));
            if (operator === "/" && prevDisplayValue !== 0 && displayValue !== 0) 
            setDisplayValue(prevDisplayValue / Number(displayValue));
            
            setPrevDisplayValue(displayValue);
            setOperator("")
        }


    }

    return (
        <div className='calculatorBodyContainer'>
            <Display 
                value={displayValue}
            />
            <div className='buttonsContainer'>
                <Numbers 
                    handleClick={handleClick}
                />
                <Operators 
                    handleClick={handleClick}
                />
            </div>
            <button 
                className='clearButton'
                onClick={() => {
                    setDisplayValue("");
                    setPrevDisplayValue(0);
                    operator = "";
                }}    
            >Clear</button>
        </div>
    )
}

export default Calculator;
