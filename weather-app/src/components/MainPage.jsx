import { React, useState } from 'react'
import DegreesDisplay from './DegreesDisplay'
import LocationAndDate from './LocationAndDate'
import Searchbar from './Searchbar'
import "../css/general.css";

const MainPage = (props) => {
    const temp = props.data.main.temp;

    const styleImage = {
        backgroundImage: 'url("/normal.jpg")',
    }

    if (temp < 0) {
        styleImage.backgroundImage = 'url("/cold.jpg")'
    } else if (temp > 25) {
        styleImage.backgroundImage = 'url("/hot.jpg")'
    }

    try {
        return (
            <div className='mainPage' style={styleImage}>
                <Searchbar
                    location={props.setInputLocation}
                />
                <LocationAndDate
                    data={props.data}
                />
                <DegreesDisplay 
                  temp={temp}
                />
                <h1 className="condition">{props.data.weather[0].main}</h1>
            </div>
        )
    } catch (error) {
        window.location.reload();
        alert("Please enter a valid city or country name!")
    }   
}

export default MainPage
