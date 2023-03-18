import React from "react";
import ShoppingListContainer from "./components/ShoppingListContainer";
import "./css/general.css";

function App() {
    return (
        <div className='appContainer'>
            <h1 className="pageTitle">Your Shopping List🧺</h1>
            <ShoppingListContainer />
        </div>
    );
}

export default App;
