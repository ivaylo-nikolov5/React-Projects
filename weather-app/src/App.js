import React from "react";
import Searchbar from "./components/Searchbar";
import "./css/general.css";
const api = {
    key: "ef7552bf739ca8eaaa74bff7d232334a",
    base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
    return (
        <div className="appContainer">
            <Searchbar />
        </div>
    );
}

export default App;
