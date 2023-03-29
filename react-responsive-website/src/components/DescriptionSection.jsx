import React from 'react'
import "../css/DescriptionSection.css"
import DescriptionIcons from './smallComponents/DescriptionIcons'
import EngineerImages from './smallComponents/EngineerImages'
import ServicesImages from './smallComponents/ServicesImages'

const DescriptionSection = () => {
    return (
        <div className='descriptionContainer'>
            <div className='logoContainer'>
                <i class="fa-solid fa-screwdriver-wrench"></i>
                <img src="./images/logo.png" alt="" className='descriptionLogo'/>
                <i class="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <h1 className='greeting'>
                Welcome to FTPC Service's website!
            </h1>
            <h1 className='startText'>We're here to keep your systems running smoothly. Let's get started!</h1>
            <DescriptionIcons /> 
            <h2 className='descriptionText1'>At FTPC Service, we understand that technology plays a crucial role in our daily lives, both at home and at work. Whether it's for personal use or business operations, computers and other digital devices are essential tools that require constant maintenance and support to function at their best.</h2>            
            <EngineerImages />
            <h2 className='descriptionText2'>That's why we're here to help. With years of experience in the industry, our team of experts is dedicated to providing fast, reliable computer services to meet your needs. We offer a wide range of services, including hardware and software maintenance, troubleshooting, installation and configuration, data backup and recovery, network setup and management, and security services.</h2>
            <ServicesImages />
            
            <h2 className='descriptionText3'>We're confident that you'll be impressed with our level of service and expertise.</h2>
            <h2 className='thanks'>Thank you for considering FTPC Service for your computer service needs. We look forward to the opportunity to serve you.</h2>
        </div>
    )
}

export default DescriptionSection
