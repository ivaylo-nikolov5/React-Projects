import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import Error from './pages/Error';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="/home" element={<MainPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="*" element={<Error />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
