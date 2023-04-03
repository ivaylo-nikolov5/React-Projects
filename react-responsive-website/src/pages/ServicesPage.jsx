import React from 'react'
import Navbar from '../components/Navbar'
import ServicesMain from "../components/ServicesMain";
import "../css/Services.css"
import SectionDelimiter from '../components/smallComponents/SectionDelimiter';
import ServicesSection from '../components/ServicesSection';
import services from '../data/services';
import Footer from "../components/Footer"

const ServicesPage = () => {
    const hardwareServices = services[0];
    const softwareServices = services[1];

    return (
        <div className='servicesPageContainer'>
            <Navbar />
            <ServicesMain/>

            <SectionDelimiter />

            <ServicesSection 
                title="Hardware Services"
                services={hardwareServices}
            />

            <SectionDelimiter />

            <ServicesSection 
                title="Software Services"
                services={softwareServices}
            />

            <div className='space'>

            </div>  

            <SectionDelimiter />

            <Footer />
    </div>
    )
}

export default ServicesPage
