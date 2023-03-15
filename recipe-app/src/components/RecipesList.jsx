import { React, useState, useEffect } from 'react'
import Recipe from './Recipe'

const RecipesList = (props) => {
    const [recipesData, setRecipesData] = useState([]);
    let filteredData = [];
    const foodData = props.data;
    const url = `https://www.edamam.com/search?q=${foodData.toLowerCase()}`;

    

    filteredData = recipesData.map((dish, index) => {
        
        return <Recipe 
                    key={index}
                    image={dish.recipe.image}
                    name={dish.recipe.label}
                    ingredients={dish.recipe.ingredientLines}
                />
    })

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setRecipesData(data.hits);
        })
    }, [foodData])

    return (
        <div>
            {filteredData}
        </div>
    )
}

export default RecipesList
