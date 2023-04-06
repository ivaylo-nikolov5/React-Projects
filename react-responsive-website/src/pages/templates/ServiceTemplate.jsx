import React from 'react'
import "../../css/ServiceTemplate.css";
import Navbar from "../../components/Navbar";
import SectionDelimiter from "../../components/smallComponents/SectionDelimiter";
import Footer from "../../components/Footer";

const ServiceTemplate = (props) => {
    return (
        <div className="serviceTemplateContainer">
            <Navbar />

            <div className='serviceTemplateTitleContainer'>
                <h1 className='serviceTemplateTitle'>{props.title}</h1>
                <i class="fa-solid fa-wrench"></i>
            </div>

            <SectionDelimiter />
            
            <div className='serviceTemplateInfo'>
                <p className='serviceTemplateInfoText'>
                    {props.firstText}
                </p>

                <div className='serviceTemplateInfoImages'>
                    <img src={`../images/services/${props.firstImageUrl}`} alt="" className='serviceTemplateInfoImage' />
                    <img src={`../images/services/${props.secondImageUrl}`} alt="" className='serviceTemplateInfoImage' />
                </div>
                
                <p className='serviceTemplateInfoText'>
                {props.secondText}
                </p>

            </div>

            <SectionDelimiter />

            <Footer />

        </div>
    )
}

export default ServiceTemplate