import React from 'react'
import "../css/item.css"

const Item = (props) => {
    return (
        <div className='itemContainer'>
            <input 
                type="checkbox"  
                className='itemCheck'
            />
            <p className='itemName'>Item 1</p>
            <div className='quantityChanger'>
                <i class="fa-solid fa-less-than"
                
                ></i>
                <p className='itemQuantity'>1</p>
                <i class="fa-solid fa-greater-than"
                
                    ></i>
            </div>
        </div>
    )
}

export default Item
