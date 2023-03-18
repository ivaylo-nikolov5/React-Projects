import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import React from 'react'
import "../css/shoppingListContainer.css"

const ShoppingListContainer = () => {
    return (
        <div className='listContainer'>
            <div className='addContainer'>
                <input type="text" className='listInput' placeholder='Add an item...'/>
                <div className='buttonDiv'>
                    <button
                        className='listAddBtn'
                    ><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingListContainer
