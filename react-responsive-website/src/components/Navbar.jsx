import { React, useState } from 'react'
import "../css/Navbar.css"
import DropMenu from './smallComponents/DropMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    function changeClicked() {
        setClicked(prev => !prev);
    }

    return (
        <div>
            <div className='navbarContainer'>
                <a href="index.html">
                    <img src="./images/logo.png" 
                        alt=""  
                        className='logoImage'
                        
                    />
                </a>
                <div className='navMenuContainer'>
                    <button to="/"
                        className='homeBtn'
                    >Home</button>
                    <button to="/services"
                        className='servicesBtn'
                    >Services</button>
                    <button to="products"
                        className='productsBtn'
                    >Products</button>
                </div>
                <button
                    className='signUpBtn'
                >Sign Up
                </button>
                <div 
                    onClick={changeClicked}
                    className="burgerMenu"
                >
                    {clicked ?  <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
                </div>
            </div>

            {clicked && <DropMenu clicked={clicked}/>}
        </div>
    )
}

export default Navbar
