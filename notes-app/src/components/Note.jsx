import React from 'react';
import "../css/Note.css";

const Note = (props) => {
    const toggle = props.toggle;
    const containerStyle = {
        "backgroundColor": toggle ? "white" : "rgb(7, 14, 24)",
        "color": toggle ? "black" : "white"
    }
    const date = new Date();

    return (
        <div className='noteContainer' style={containerStyle}>
            <p className='noteText'>{props.text}</p>

            <div className='noteInfo'>
                <p className='noteDate'>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
                <i 
                    class="fa-solid fa-trash"
                    onClick={0}
                ></i>
            </div>
        </div>
    )
}

export default Note