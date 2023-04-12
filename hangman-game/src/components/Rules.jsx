import React from 'react';
import "../css/Rules.css";

const Rules = (props) => {
    return (
        <div className='rulesContainer'>   
            <div className='rulesHeader'>
                <div className='rulesTitle'>Hangman Rules</div>
                <div onClick={() => props.setRulesShown(false)}>
                    <i className="fa-solid fa-x"></i>
                    </div>
            </div>

          
            <ol className='rules'>
                <li>The computer selects a random word.</li>
                <li>The player guesses one letter at a time.</li>
                <li>Correct guesses reveal the letters in the word.</li>
                <li>Incorrect guesses add elements to the hangman figure.</li>
                <li>The player wins by correctly guessing the word.</li>
                <li>The player loses if the hangman figure is complete or if they run out of guesses.</li>
                <li>The game can be played again with a new randomly selected word.</li>
            </ol>

        </div>
    )
}

export default Rules