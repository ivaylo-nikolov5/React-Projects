import {React, useState, useEffect} from 'react';
import './App.css';
import Title from './components/Title';

let appearance = {
    "textColor": "white",
    "backgroundColor": "rgb(7, 14, 24)" 
}

function App() {
    const [toggle, setToggle] = useState(true);

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
                />
            </div>
        </div>
    );
}

export default App;