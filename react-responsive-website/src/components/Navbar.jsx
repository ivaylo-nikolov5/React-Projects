import { React, useState } from 'react'
import "../css/Navbar.css"
import DropMenu from './DropMenu';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    function changeClicked() {
        setClicked(prev => !prev);
    }

    return (
        <div>
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
