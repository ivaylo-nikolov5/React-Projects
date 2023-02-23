import React from 'react'
import "./registrationForm.css";

const RegistrationForm = () => {

    const [registrationForm, setRegistrationForm] = React.useState({
        "firstName": "",
        "lastName": "",
        "email": ""
    })

    const [registered, setRegistered] = React.useState(false);
    const [registerMessage, setRegisterMessage] = React.useState("Successfully registered!");
    const [registerMessageColor, setRegisterMessageColor] = React.useState("rgb(17, 146, 17)");

    const colorStyle = {
        "color": {registerMessageColor}
    }

    console.log(registrationForm);

    function handleChange(event) {
        setRegistrationForm(prevForm => {
            const {name, value} = event.target;

            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const message = validateData(registrationForm);
        
        if (message !== "Successfully registered!") {
            setRegisterMessageColor("rgb(227, 30, 16)");
        } else {
            setRegisterMessageColor("rgb(17, 146, 17)");
        }

        setRegisterMessage(message);
        setRegistered(true);
    }

    function validateData(data) {
        const fName = data.firstName;
        const lName = data.lastName;
        const email = data.email;

        if (fName == "") return "First name cannot be empty!"
        else if (lName == "") return "Last name cannot be empty!"
        else if (/\d/.test(fName) || /\d/.test(lName)) return "Names cannot contain digits!"
        else if (!/@/.test(email)) return "Email is not in the correct format or empty!"

        return "Successfully registered!";
    }

    return (
        <div className='registration-form--body'>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="registration-form--input"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={registrationForm.firstName}

                />        
                <input
                    type="text"
                    className="registration-form--input"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={registrationForm.lastName}
                />        
                <input
                    type="email"
                    className="registration-form--input"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={registrationForm.email}

                />

                <button
                    value="Register"
                    className='registration-form--submit'
                    name="firstName"
                >Register</button>
            </form>
            {registered && <p 
                            className='register-message'
                            style={colorStyle}
                            >{registerMessage}</p>}
        </div>
    )
}

export default RegistrationForm
