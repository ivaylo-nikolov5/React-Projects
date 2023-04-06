import React from 'react';
import "../css/App.css";
import DescriptionSection from '../components/DescriptionSection.jsx';
import Navbar from "../components/Navbar.jsx";
import TitleSection from '../components/TitleSection.jsx';
import SectionDelimiter from '../components/smallComponents/SectionDelimiter';
import Footer from "../components/Footer"

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <TitleSection />
            
            <SectionDelimiter />

            <div className='toScroll'>

            </div>

            <DescriptionSection />

            <SectionDelimiter/>

            <Footer/>
        </div>
    )
} 

export default MainPage
