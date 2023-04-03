import React from 'react'
import Navbar from '../components/Navbar'
import ServicesMain from "../components/ServicesMain";
import "../css/Services.css"
import SectionDelimiter from '../components/smallComponents/SectionDelimiter';
import ServicesSection from '../components/ServicesSection';

const ServicesPage = () => {
    return (
        <div className='servicesPageContainer'>
            <Navbar />
            <ServicesMain/>

            <SectionDelimiter />

            <ServicesSection />
        </div>
    )
}

export default ServicesPage
