import React from 'react'
import Task from "./Task";
import "../css/todosContainer.css";
import InputContainer from './InputContainer';

const TodosContainer = () => {
    return (
        <div className='mainContainer'>
            <h1 className='todosTitle'>YOUR TO-DOs</h1>
            <InputContainer />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}

export default TodosContainer
