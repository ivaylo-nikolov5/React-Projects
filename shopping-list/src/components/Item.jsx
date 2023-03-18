import { React, useState } from 'react'
import "../css/item.css"

const Item = (props) => {
    const [name, setName] = useState(props.itemName);
    const [bought, setBought] = useState(false);
    const [itemsCount, setItemCount] = useState(1);

    function changeStatus() {
        setBought(prevStatus => !prevStatus);
    }

    function changeQuantity(event) {
        const id = event.target.id;
         
        if (id === "increment") {
            setItemCount(prevCount => prevCount + 1);
            props.setCount(prevCount => prevCount + 1);
        } else {
            setItemCount(prevCount => prevCount > 1 ? prevCount - 1 : prevCount);
            props.setCount(prevCount => itemsCount === 1 ? prevCount : prevCount - 1);
        }
    }

    return (
        <div className='itemContainer'>
            <input 
                type="checkbox"  
                className='itemCheck'
                onChange={changeStatus}
            />
            <p className='itemName' 
            style={{ textDecoration: bought ? "line-through" : "none"}}>{name}</p>
            <div className='quantityChanger'>
                <i className="fa-solid fa-less-than"
                    id="decrement"
                    onClick={changeQuantity}
                ></i>
                <p className='itemQuantity'>{itemsCount}</p>
                <i className="fa-solid fa-greater-than"
                    id="increment"
                    onClick={changeQuantity}                    
                ></i>
            </div>
        </div>
    )
}

export default Item
