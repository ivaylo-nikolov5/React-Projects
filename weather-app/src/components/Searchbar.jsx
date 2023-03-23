import React from 'react'
import "../css/searchbar.css"

const Searchbar = () => {
    return (
        <div className='searchBar'>
            <input 
                type="text" 
                className='searchbar'
                placeholder='Enter a location...'
            />
        </div>
    )
}

export default Searchbar
