import React from 'react';
import DescriptionSection from '../components/DescriptionSection.jsx';
import Navbar from "../components/Navbar.jsx";
import TitleSection from '../components/TitleSection.jsx';

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <TitleSection />
            <hr />
            <DescriptionSection />
        </div>
    )
}

export default MainPage
