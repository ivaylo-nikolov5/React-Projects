import {React, useState, useEffect} from 'react';
import './css/App.css';
import Title from './components/Title';
import Searchbar from './components/Searchbar';
import Note from "./components/Note";

let appearance = {
    "textColor": "white",
    "backgroundColor": "rgb(7, 14, 24)" 
}

function App() {
    const [toggle, setToggle] = useState(true);
    const [value, setValue] = useState("");

    useEffect(() => {
        Object.keys(appearance).forEach(key => {
          document.body.style[key] = appearance[key];
        });
      }, [toggle]);

    function changeAppearanceMode () {
        setToggle(prevState => !prevState);

        appearance.color = toggle ? "black" : "white";
        appearance.backgroundColor = toggle ? "white" : "rgb(7, 14, 24)";
    }


    return (
        <div
            className='appContainer'
        >
            <div className='title'>
                <Title
                    changeAppearanceMode={changeAppearanceMode}
                    toggle={toggle}
                />
            </div>

            <Searchbar 
                    toggle={toggle}
                    value={value}
                    setValue={setValue}
                />

            <hr className='delimiter' style={{"border-color": toggle ? "white" : "rgb(7, 14, 24)"}}/>

            <div className='notesContainer'>
                <Note 
                    toggle={toggle}
                />
            </div>
        </div>
    );
}

export default App;