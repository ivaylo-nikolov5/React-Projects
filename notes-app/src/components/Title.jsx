import React from 'react'

const Title = (props) => {

    const buttonStyle = {
        "color": props.toggle ? "black" : "white",
        "backgroundColor": props.toggle ? "white" : "rgb(7, 14, 24)"
    }

    const titleStyle = {
        "color": props.toggle ? "white" : "rgb(7, 14, 24)",
    }

    return (
        <div className='titleContainer'>
            <h1 style={titleStyle}>Notes 📝</h1>
            <button
                className='modeToggleButton'
                onClick={props.changeAppearanceMode}
                style={buttonStyle}
            >Toggle Mode</button>
        </div>
    )
}

export default Title