import React from 'react';
import "../css/recipe.css"

const Recipe = (props) => {
    const ingredients = props.ingredients;
    const liIngredients = ingredients.map(ingredient => {
        return <li>{ingredient}</li>
    })

    return (
        <div className='recipeContainer'>
            <img src={props.image} alt="food image" className='foodImage'/>
            <div className='ingredientsList'>
                <h1 className='dishName'>{props.name}</h1>
                <p className='ingredientsP'>Ingredients</p>
                <ul className='ingredientsList'>
                    {liIngredients}
                </ul>
            </div>
        </div>
    )
}

export default Recipe
