import React from 'react'

const DropMenu = (props) => {
    return (
        <div className={"slideIn"}>
                <button
                    className='homeBtn'
                >Home</button>
                <button
                    className='servicesBtn'
                >Services</button>
                <button
                    className='productsBtn'
                >Products</button>
                <button
                    className='responsiveSignUpBtn'
                >Sign Up</button>
            </div>
    )
}

export default DropMenu
