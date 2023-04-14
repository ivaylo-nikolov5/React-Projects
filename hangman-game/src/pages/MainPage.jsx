import {React, useState} from 'react';
import Hangman from '../components/Hangman';
import TitleSection from '../components/TitleSection';
import {words} from "../data/words";
import "../css/MainPage.css";
import WordGuess from '../components/WordGuess';
import RestartPopup from '../components/RestartPopup';

const MainPage = () => {
    const [reload, setReload] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [fails, setFails] = useState(0);
    const [failed, setFailed] = useState(false);
    const [rulesShown, setRulesShown] = useState(false);
    let guessedLetters = [];

    function restartGame() {
        setAttempts(0);
        setFails(0);
        setFailed(false);
        setRulesShown(false);
        setReload(prev => !prev);
    }
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
                        reload={reload}
                        guessedLetters={guessedLetters}
                    />
                </div>
            </div>
            {!failed ? "" : <RestartPopup 
                restartGame={restartGame}
            />}
        </div>
    )
}

export default MainPage