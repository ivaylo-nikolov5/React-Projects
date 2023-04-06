import React from 'react'
import ServiceCard from "../components/ServiceCard";
import "../css/Services.css"; 

const ServicesSection = (props) => {
    const services = props.services;
    const servicesAsCards = services.map((service, index) => {
        return <ServiceCard
                    key={index}
                    url={service.url}
                    image={service.image}
                    text={service.service}
                    title={service.title}
                    firstText={service.firstText}
                    secondText={service.secondText}
                    firstImageUrl={service.firstImage}
                    secondImageUrl={service.secondImage}
                        
                />
    })

    return (
        
        <div className='serviceSectionContainer'>
            <h1 className='serviceSectionTitle'>{props.title}</h1>
            <div className='servicesContainer'>
                {servicesAsCards}
            </div>
        </div>
        
    )
}

export default ServicesSection