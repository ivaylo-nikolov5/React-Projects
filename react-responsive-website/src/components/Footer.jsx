import React from 'react'
import "../css/Footer.css";

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerTopSection'>
                <div className='socialMedias'>
                    <p>Computer service made simple...</p>
                    <div className='socialIcons'>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
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
