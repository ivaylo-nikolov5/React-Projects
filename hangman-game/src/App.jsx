import { React, useState } from 'react';
import './css/App.css';
import Hangman from './components/Hangman';

function App() {
    const [attempts, setAttempts] = useState(0);
    const [fails, setFails] = useState(0);
    const [failed, setFailed] = useState(false);

    function handleClick() {
        setFails(prevFails => prevFails + 1);
    }

    return (
        <div className='appContainer'>
            <Hangman 
                fails={fails}
                failed={failed}
                setFailed={setFailed}
            />

<button onClick={handleClick}>click</button>
        </div>
    );
}

export default App;