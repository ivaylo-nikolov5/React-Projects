import React from 'react'
import "../css/ServiceCard.css";

const ServiceCard = (props) => {
    return (
        <div className='serviceCardContainer'>
            <img 
                src={props.image} 
                alt="" 
                className='serviceCardImage'/>
            <h2
                className='serviceCardText'
            >{props.text}</h2>
        </div>
    )
}

export default ServiceCard