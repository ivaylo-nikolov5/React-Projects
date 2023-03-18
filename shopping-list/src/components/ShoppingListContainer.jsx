import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { React, useState } from 'react'
import "../css/shoppingListContainer.css"
import Item from './Item'

const ShoppingListContainer = () => {
    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const itemsAsComponents = items.map((itm, idx) => {
        return <Item
                    key={idx}
                    itemName={itm.itemName}
                    setCount={setTotalCount}
                />
        
    })
   

    function changeItem(event) {
        setItem(event.target.value);
    }

    function addItem() {
        if (item.trim() === "") {
            return
        }

        setItems(prevItems => {
            return [...prevItems, {itemName: item}];
        })
        setTotalCount(prevCount => prevCount + 1);
        setItem(""); 
    }

    return (
        <div className='listContainer'>
            <div className='addContainer'>
                <input type="text" 
                    className='listInput'
                    placeholder='Add an item...'
                    onChange={changeItem}
                    value={item}
                />
                <div className='buttonDiv'>
                    <button
                        className='listAddBtn'
                        onClick={addItem}
                    ><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>

           <div className='itemsList'>
                {itemsAsComponents}
           </div>

           <div className='totalCount'>Total items: {totalCount}</div>
        </div>
    )
}

export default ShoppingListContainer
