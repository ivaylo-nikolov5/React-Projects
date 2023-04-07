import React from 'react'

const Title = (props) => {
    return (
        <div className='titleContainer'>
            <h1>Notes 📝</h1>
            <button
                className='modeToggleButton'
                onClick={props.changeAppearanceMode}
            >Toggle Mode</button>
        </div>
    )
}

export default Title