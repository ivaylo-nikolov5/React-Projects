import React from 'react'
import "../css/searchbar.css"

const Searchbar = (props) => {
    const [data, setData] = React.useState("");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.location(event.target.value);
        }
      };

    function handleChange(event) {
        setData(event.target.value);
    }

    return (
        <div className='searchBar'>
            <input 
                type="text" 
                className='searchbar'
                placeholder='Enter a location...'
                value={data}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default Searchbar
