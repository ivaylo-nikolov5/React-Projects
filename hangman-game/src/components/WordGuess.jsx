import {React, useEffect, useState} from 'react';
import hideWord from "../data/hiddenWord";
import "../css/WordGuess.css";

const WordGuess = (props) => {
    const words = props.words;
    const [hiddenWord, setHiddenWord] = useState('');
    const guessedLetters = [];
    const [topic, setTopic] = useState('');
    const [currentWord, setCurrentWord] = useState("");

    useEffect(() => {
        document.addEventListener("keydown", guessLetter);

        return () => {
            document.removeEventListener("keydown", guessLetter);
        };
    }, [])

    useEffect(() => {
        const randN = Math.floor(Math.random() * 6);
        const t = Object.keys(words)[randN];
        const current = words[t].data;
        const randM = Math.floor(Math.random() * current.length);
        const cWord = current[randM];
        setCurrentWord(cWord.toLowerCase());
        setHiddenWord(hideWord(cWord));
        setTopic(t);
    }, [])

    function guessLetter(event) {

        const val = event.key;
        if (guessedLetters.includes(val)) {
            alert("You have already found this letter!");
            return;
        } else if (!currentWord.includes(val)) {
            props.setFails(prev => prev + 1);
            return;
        }
        
        guessedLetters.push(val);
        setHiddenWord(prevHiddenWord => {
            for (let i = 0; i < prevHiddenWord.length; i++) {
                if (currentWord[i] === val) {
                    prevHiddenWord = prevHiddenWord.substring(0, i) + val + prevHiddenWord.substring(i + 1);
                }
            }
            return prevHiddenWord
        })
    }

    return (
        <div className='wordsGuessContainer'>
            {topic && <p className='topic'>Topic: {words[topic].topic}</p>}
            <h2>Your guess:</h2>
            <p className='dashedWord'>{hiddenWord}</p>
        </div>
    )
}

export default WordGuess