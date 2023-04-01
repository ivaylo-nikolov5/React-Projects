import React from 'react'
import "../css/Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerTopSection'>
                <div className='socialMedias'>
                    <p>Computer service made simple...</p>
                    <div className='socialIcons'>
                        <Link to="https://www.youtube.com/@lizardtech1" target="_blank">
                            <i class="fa-brands fa-youtube"></i>
                        
                        </Link>
                        <Link to="https://www.instagram.com/rise.up.mindset/" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        
                        </Link>
                        <Link to="https://www.facebook.com/groups/750621526366577" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                        
                        </Link>
                        <Link to="https://twitter.com/IvailoNikolov55" target="_blank">
                            <i class="fa-brands fa-twitter"></i>
                        </Link>
                    </div>
                </div>

                <div className='topInfo'>
                    <div className='infoSection'>
                        <p className='infoMain'>Product</p>
                        <p className='infoContent'>Product1</p>
                        <p className='infoContent'>Product2</p>
                        <p className='infoContent'>Product3</p>
                        <p className='infoContent'>Product4</p>
                        <p className='infoContent'>Product5</p>
                    </div>

                    <div className='infoSection'>
                        <p className='infoMain'>Company</p>
                        <p className='infoContent'>About</p>
                        <p className='infoContent'>Jobs</p>
                    </div>

                    <div className='infoSection'>
                        <p className='infoMain'>Resources</p>
                        <p className='infoContent'>Community</p>
                        <p className='infoContent'>Feedback</p>
                    </div>

                    <div className='infoSection'>
                        <p className='infoMain'>Policies</p>
                        <p className='infoContent'>Terms</p>
                        <p className='infoContent'>Privacy</p>
                        <p className='infoContent'>Cookie Settings</p>
                        <p className='infoContent'>Guidelines</p>
                        <p className='infoContent'>Licenses</p>
                    </div>
                    
                </div>
            </div>

            <hr />
            <div className='footerBottomSection'>
                <img src="./images/logo.png" alt="" className='footerLogo'/>
                <button
                    className='footerSignUpBtn'
                >Sign Up
                </button>
            </div>
        </div>
    )
}

export default Footer
