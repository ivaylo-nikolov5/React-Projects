import {React, useState, useEffect} from 'react';
import './App.css';


function App() {
    const [quoteText, setQuoteText] = useState("");
    const [state, setState] = useState(false);

    useEffect(() => {
        const apiUrl = 'https://api.adviceslip.com/advice';

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            setQuoteText(data.slip.advice)
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
    }, [state])

    function generateQuote() {
        setState(prevState => !prevState)
    }

    return ( 
        <div className = "App" >
                <img src="./city.jpg" alt=""  className='backgroundImage'/>
                <div className='quoteContainer'>
                    <h2 className='quoteText'>{quoteText}</h2>
                    <button 
                        className='generateQuoteBtn'
                        onClick={generateQuote}
                    >New Quote</button>
                </div>
        </div>
    );
}

export default App;