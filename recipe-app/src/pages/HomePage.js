import React from 'react'
import RecipesList from "../components/RecipesList";
import Searchbar from "../components/Searchbar";
import Title from "../components/Title";
import "../css/general.css";

const HomePage = () => {
    const [data, setData] = React.useState("")

    function gatherData(data) {
        setData(data);
    }

    return(
        <div className="appContainer">
            <Title />
            <Searchbar 
                useSearchData={gatherData}
            />
            
            <RecipesList 
                data={data}
            />
            
        </div>
    )    
}

export default HomePage;
