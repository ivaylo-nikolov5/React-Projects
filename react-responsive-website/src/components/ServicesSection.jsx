import React from 'react'
import ServiceCard from "../components/ServiceCard";
import "../css/Services.css"; 

const ServicesSection = (props) => {
    return (
        <div className='serviceSectionContainer'>
            <h1 className='serviceSectionTitle'>Hardware Services</h1>

            <div className='servicesContainer'>
                <ServiceCard />
            </div>
        </div>
    )
}

export default ServicesSection