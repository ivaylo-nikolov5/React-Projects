import {React, useState} from 'react';
import Hangman from '../components/Hangman';
import TitleSection from '../components/TitleSection';
import {words} from "../data/words";
import "../css/MainPage.css";
import WordGuess from '../components/WordGuess';

const MainPage = () => {
    const [attempts, setAttempts] = useState(0);
    const [fails, setFails] = useState(0);
    const [failed, setFailed] = useState(false);
    const [rulesShown, setRulesShown] = useState(false);
    
    return (
        <div className='mainPageContainer'>
            <TitleSection 
                rulesShown={rulesShown}
                setRulesShown={setRulesShown}
            />

            <div className='gameContainer'>
                <div className='hangmanContainer'>
                    <Hangman 
                        fails={fails}
                        failed={failed}
                        setFailed={setFailed}
                    />
                </div>

                <div className='infoContainer'>
                    <WordGuess 
                        attempts={attempts}
                        setAttempts={setAttempts}
                        fails={fails}
                        setFails={setFails}
                        failed={failed}
                        setFailed={setFailed}
                        words={words}
                    />
                </div>
            </div>

            
        </div>
    )
}

export default MainPage