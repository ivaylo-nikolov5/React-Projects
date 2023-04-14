import React from 'react';
import "../css/RestartPopup.css";

const RestartPopup = (props) => {

    function handleRetry() {
        props.restartGame();
    }

    return (
        <div className='restartPopupContainer'>   
            <h1 className='conditionMessage'>You lost!</h1>
            <h2 className='retryText'>You can try one more time:</h2>
            <button 
                className='retryBtn'
                onClick={handleRetry}
            >Retry</button>
        </div>
    )
}

export default RestartPopup