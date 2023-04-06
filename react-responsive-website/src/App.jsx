import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import Error from "./pages/Error";
import ScrollToTop from "./ScrollToTop"
import ServiceTemplate from "./pages/templates/ServiceTemplate";
import services from './data/services';

function App() {
    const hardware = services[0];
    const software = services[1];

    const pageUrl =  window.location.href.split("/");
    const name = pageUrl[pageUrl.length - 1]
    let idx = 0;
    switch (name) {
        case "hardware-repair": idx = 0; break;
        case "hardware-upgrade": idx = 1; break;
        case "hardware-cleaning": idx = 2; break;
        case "os-installation": idx = 3; break;
        case "anti-virus": idx = 4; break;
        case "data-recovery": idx = 5; break;
        default: idx = 0;
    }

    const data = (idx < 3) ? hardware[idx] : software[idx - 3];
    console.log(data);
    
    return ( 
        <div>
        <BrowserRouter>
        <ScrollToTop/>
        <Routes >
        <Route index element = { <MainPage /> }/> 
        <Route path = "/home"element = { < MainPage /> }/> 
        <Route path = "/products" element = { <ProductsPage /> }/> 
        <Route path = "/services" element = { <ServicesPage /> }/> 
        <Route path = "/services/:serviceName" 
        element = { <ServiceTemplate 
                    title={data.service}
                    firstText={data.firstText}
                    secondText={data.secondText}
                    firstImageUrl={data.firstImage}
                    secondImageUrl={data.secondImage}
        /> }/> 
        <Route path = "*" element = { <Error /> }/> 
        </Routes> 
        </BrowserRouter>

        </div>
    );
}

export default App;