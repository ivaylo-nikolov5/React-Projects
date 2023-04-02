import React from 'react'
import Navbar from '../components/Navbar'
import ServicesMain from "../components/ServicesMain";
import "../css/Services.css"
import SectionDelimiter from '../components/smallComponents/SectionDelimiter';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
    return (
        <div className='servicesPageContainer'>
            <Navbar />
            <ServicesMain/>

            <SectionDelimiter />

            <div className='servicesContainer'>
                <ServiceCard />
            </div>
        </div>
    )
}

export default ServicesPage
