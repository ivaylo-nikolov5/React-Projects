import {React, useState, useEffect} from 'react';
import './css/App.css';
import Title from './components/Title';
import Searchbar from './components/Searchbar';
import Note from "./components/Note";
import AddNote from './components/AddNote';

let appearance = {
    "textColor": "white",
    "backgroundColor": "rgb(7, 14, 24)" 
}

function App() {
    const [toggle, setToggle] = useState(true);
    const [value, setValue] = useState("");
    const [notes, setNotes] = useState([]);
    const [noteId, setNoteId] = useState(notes.length);

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

    console.log(notes);

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

            <hr className='delimiter' style={{"bordeColor": toggle ? "white" : "rgb(7, 14, 24)"}}/>

            <div className='notesContainer'>
                <AddNote 
                    noteId={noteId}
                    setNoteId={setNoteId}
                    setNotes={setNotes}
                />
            </div>
        </div>
    );
}

export default App;