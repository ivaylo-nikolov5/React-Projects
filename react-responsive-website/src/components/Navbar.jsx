import React from 'react'
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <img src="./logo.png" alt=""  className='logoImage'/>
            <div className='navMenuContainer'>
                <button
                    className='homeBtn'
                >Home</button>
                <button
                    className='servicesBtn'
                >Services</button>
                <button
                    className='productsBtn'
                >Products</button>
            </div>
            <button
                className='signUpBtn'
            >Sign Up</button>
        </div>
    )
}

export default Navbar
