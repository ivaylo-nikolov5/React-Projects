import React from "react";
import ContactCard from "./ContactCard";
import "./general.css";

function App() {
    const [data, setData] = React.useState([])

    console.log(data);
    const dataAsContactCards = data.map((result, index) => {
        return <ContactCard
                    image={result.picture.large}
                    firstName={result.name.first}
                    lastName={result.name.last}
                    email={result.email}
                    age={result.dob.age}
                    key={index}
                />
    })

    React.useEffect(() => {
        fetch("https://randomuser.me/api/?results=1127")
        .then(response => response.json())
        .then(data => {
            setData(data.results);
        })
    }, [])


    return (
        <div className="contactsContainer">
            {dataAsContactCards}
        </div>
    )
}

export default App;
