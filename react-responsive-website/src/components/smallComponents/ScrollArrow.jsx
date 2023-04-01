import React from 'react'
import { Link } from 'react-scroll';
import "../../css/TitleSectionContainer.css"

const ScrollArrow = () => {
    return (
        <div>
            <Link to="toScroll" smooth={true} duration={1000}>
                <div className='descriptionRedicrecter'>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
            </Link>
        </div>
    )
}

export default ScrollArrow
