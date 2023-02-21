import React from 'react';
import "../style.css"

const Temperature = () => {
    const [temperature, setTemperature] = React.useState(10);
    
    const displayStyle = {
        backgroundColor: "rgb(24, 135, 239)"
    } 

    setTempColor();

    function decrementTemperature() {

        setTemperature(prevTemp => prevTemp - 1)

    }   

    function incrementTemperature() {
        setTemperature(prevTemp => prevTemp + 1)
    }

    function setTempColor() {
        if (temperature < -20) displayStyle.backgroundColor = "rgb(3, 98, 252)"
        else if (temperature < 0) displayStyle.backgroundColor = "rgb(24, 135, 239)"
        else if (temperature < 20) displayStyle.backgroundColor = "rgb(3, 252, 144)"
        else if (temperature < 30) displayStyle.backgroundColor = "rgb(252, 219, 3)"
        else if (temperature < 40) displayStyle.backgroundColor = "#fc7703"
        else if (temperature < 50) displayStyle.backgroundColor = "rgb(252, 57, 3)"
        else displayStyle.backgroundColor = "rgb(252, 3, 30)";
    }

    return (
        <div className='temperature-container'>
            <div className='temperature-display' style={displayStyle}>
                <h1 className='temperature-value'>{temperature} &#8451;</h1>
            </div>
            <div className='temperature-controls'>
                <button
                    className='contol-button'
                    onClick={decrementTemperature}
                >-</button>
                <button
                    className='contol-button'
                    onClick={incrementTemperature}
                >+</button>
            </div>
        </div>
    )
}

export default Temperature;
