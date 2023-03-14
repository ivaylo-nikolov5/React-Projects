import React from "react";
import Searchbar from "./components/Searchbar";
import Title from "./components/Title";
import "./css/general.css";

function App() {
    const [data, setData] = React.useState("")

    return(
        <div className="appContainer">
            <Title />
            <Searchbar />
        </div>
    )
}

export default App;
