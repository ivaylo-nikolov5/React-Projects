import { React, useState } from 'react';
import "./contactCard.css";

const ContactCard = (props) => {
    const [ageShown, setAgeShown] = useState(false);
    const [ageConditionText, setAgeConditionText] = useState("Show");

    function handleClick() {
        setAgeShown(prevAge => !prevAge);
        setAgeConditionText(prevText => {
            return prevText === "Show" ? "Hide" : "Show"; 
        })
    }

    return (
        <div className='contactCardContainer'>   
            <div>
                <img src={props.image} alt="" className='contactImage'/>
            </div>

            <div className='contactInfo'>
                <p>Name: {props.firstName} {props.lastName}</p>
                <p>Email: {props.email}</p>
                
                <div className='ageInfo'>
                    <button
                        className='showHideAgeBtn'
                        onClick={handleClick}
                    >{ageConditionText} Age</button>
                    {ageShown && <span className='age'>Age: {props.age}</span>}
                </div>

            </div>
        </div>
    )
}

export default ContactCard
