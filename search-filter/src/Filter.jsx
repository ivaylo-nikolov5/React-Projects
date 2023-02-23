import React from 'react';
import names from "./names";
import "./style.css";

const Filter = () => {
    const [filterNames, setFilterNames] = React.useState(names);

    const paragraphNames = filterNames.map(name => {
        return <p>{name}</p>;
    })

    function handleChange(event) {
        const value = event.target.value;
        console.log(value);
        const length = value.length;

        setFilterNames(() => {
            let newNames = [];
            for (let name of names) {
                if (name.slice(0, length) === value) {
                    newNames.push(name);
                }
            }

            return newNames;
        })

    }



    return (
        <div>
            <input 
                type="text"
                className="input-box"
                placeholder="Search..."
                onChange={handleChange}
            />

            {paragraphNames}
        
        </div>
    )
}

export default Filter
