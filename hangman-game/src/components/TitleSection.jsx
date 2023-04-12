import React from 'react'
import Rules from './Rules';

const TitleSection = (props) => {
    const showRules = props.rulesShown;

    return (
        <div className='titleSection'>
            <h1 className='mainPageTitle'>Hangman</h1>
            <button 
                className='rulesBtn'
                onClick={() => {props.setRulesShown(prevState => !prevState)}}
            >RULES</button> 
            {showRules ? <Rules 
                setRulesShown={props.setRulesShown}
            /> : ""}       
        </div>
    )
}

export default TitleSection