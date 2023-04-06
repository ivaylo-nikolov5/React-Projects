import React from 'react'
import "../css/ServiceCard.css";
import { Link } from 'react-router-dom';


const ServiceCard = (props) => {
    return (
        <Link to={`/services/${props.url}`} className='serviceCardContainer'>
            <img 
                src={props.image} 
                alt="" 
                className='serviceCardImage'/>
            <h2
                className='serviceCardText'
            >{props.text}</h2>
        </Link>
    )
}

export default ServiceCard