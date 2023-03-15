import React from 'react'
import "../css/title.css"

const Title = () => {
    return (
        <div className='titleContainer'>
            <button
                className='randomRecipeBtn'
            >Try a Random Recipe</button>
            <div className='mainContainer'>
                <img src="../chef.png" className='titleImage' />
                <h1 className='titleText'>The Recipes App 🍔</h1>
            </div>
        </div>
    )
}

export default Title
