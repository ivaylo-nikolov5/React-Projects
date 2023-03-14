import { React, useState } from 'react'
import "../css/searchbar.css"

const Searchbar = (props) => {
    const [searchData, setSearchData] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        props.useSearchData(searchData);
        setSearchData("");
    }

    function handleChange(event) {
        const value = event.target.value;
        setSearchData(value);
    }

    return (
        <div className='searchbarContainer'>
            <form className='searchForm' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className='searchBox'
                    value={searchData}
                    onChange={handleChange}
                />
                <button
                    className='searchBtn'
                >Search</button>
            </form>
        </div>
    )
}

export default Searchbar
