import React from 'react'
import "../css/TitleSectionContainer.css";
import video from "../videos/bgVideo.mp4"
import ScrollArrow from './smallComponents/ScrollArrow';
import { Link } from 'react-router-dom';


const TitleSection = () => {

    return (
        <div className='titleSection'>
            <div className='titleSectionContainer'>
                <video 
                    className='bgVideo'
                    autoPlay muted loop
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className='titleContainer'>
                    <h1 className='title'><span className='name'>FTPC</span> Computer Service Ltd.</h1>
                    <p className='slogan'>Computer problems? We've got the solution!</p>
                    <div className='titleButtons'>
                        <Link to="/services">
                            <button className='servicesTitleBtn'>Services</button>
                        </Link>
                        <Link to="/products">
                            <button className='productsTitleBtn'>Products</button>
                        </Link>
                        
                    </div>
                    <p className='descriptionRedirecterText'>MORE INFORMATION ABOUT US</p>
                    
                    <ScrollArrow/>
                </div>
            </div>
        </div>
    )
}

export default TitleSection
