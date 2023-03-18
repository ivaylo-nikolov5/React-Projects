import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import React from 'react'
import "../css/shoppingListContainer.css"
import Item from './Item'

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

           <div className='itemsList'>
                <Item />
           </div>
        </div>
    )
}

export default ShoppingListContainer
