import React from 'react'
import "../css/TitleSectionContainer.css";
import video from "../videos/bgVideo.mp4"
import { Link } from 'react-scroll';


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
                        <button className='servicesTitleBtn'>Services</button>
                        <button className='productsTitleBtn'>Products</button>
                    </div>
                    <p className='descriptionRedirecterText'>MORE INFORMATION ABOUT US</p>
                    
                    <Link to="toScroll" smooth={true} duration={1000}>
                        <div className='descriptionRedicrecter'>
                            <i class="fa-solid fa-arrow-down"></i>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default TitleSection
