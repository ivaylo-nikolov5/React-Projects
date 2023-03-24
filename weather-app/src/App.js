import { React, useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import "./css/general.css";

const api = {
    key: "ef7552bf739ca8eaaa74bff7d232334a",
    base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
    const [inputLocation, setInputLocation] = useState("Bulgaria");
    const [data, setData] = useState("");
   


    useEffect( () => {
        fetch(`${api.base}weather?q=${inputLocation}&units=metric&APPID=${api.key}`)    
        .then(response => response.json())
        .then(currentData => {
            setData(currentData);
        })
        }, [inputLocation]
    )
    

    return (
        <div className="appContainer">
            {data !== "" && 

                <MainPage 
                data={data}
                setInputLocation={setInputLocation}
                />
            }
        </div>
    );
}

export default App;
