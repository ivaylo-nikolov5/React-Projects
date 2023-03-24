import React from 'react'
import "../css/locationAndDate.css"

const LocationAndDate = (props) => {
    const data = props.data;
    const country = data.name;
    const abreviation = data.sys.country;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateInfo = new Date();
    const day = days[dateInfo.getDay()];
    const date = dateInfo.getDate();
    const month = months[dateInfo.getMonth()];
    const year = dateInfo.getFullYear();

    return (
        <div className='locationAndDateContainer'>
            <h1 className='location'>{country}, {abreviation}</h1>
            <h2 className='date'>{day} {date} {month} {year}</h2>
        </div>
    )
}

export default LocationAndDate
