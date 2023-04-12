import {React, useState} from 'react';
import Hangman from '../components/Hangman';
import "../css/MainPage.css";
import Rules from '../components/Rules';
import TitleSection from '../components/TitleSection';

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

                </div>
            </div>
        </div>
    )
}

export default MainPage