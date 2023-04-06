import { React, useState } from 'react'
import "../css/Navbar.css"
import DropMenu from './smallComponents/DropMenu';
import { Link } from 'react-router-dom';
import logo from "../data/logo.png";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    function changeClicked() {
        setClicked(prev => !prev);
    }

    return (
        <div>
            <div className='navbarContainer'>
                <a href="/">
                    <img src={logo}   
                        alt=""
                        className='logoImage'
                        
                    />
                </a>
                <div className='navMenuContainer'>
                    <Link to="/">
                        <button
                            className='homeBtn'
                        >Home</button>
                    </Link>
                    <Link to="/services">
                        <button to="/services"
                            className='servicesBtn'
                        >Services</button>
                    </Link>
                    
                    <Link to="/products">
                        <button to="/products"
                            className='productsBtn'
                        >Products</button>
                    </Link>
                    
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
