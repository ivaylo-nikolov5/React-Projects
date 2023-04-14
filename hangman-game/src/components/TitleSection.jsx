import React from 'react'
import Rules from './Rules';

const TitleSection = (props) => {
    const showRules = props.rulesShown;

    return (
        <div className='titleSection'>
           {showRules ? "" :  <h1 className='mainPageTitle'>Hangman</h1>}
            {showRules ? "" : 
            <button 
                className='rulesBtn'
                onClick={() => {props.setRulesShown(prevState => !prevState)}}
            >RULES</button> }
            
            {showRules ? <Rules 
                setRulesShown={props.setRulesShown}
            /> : ""}       
        </div>
    )
}

export default TitleSection