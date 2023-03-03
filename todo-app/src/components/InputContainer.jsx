import React from 'react'
import "../css/todosContainer.css";

const InputContainer = (props) => {
    const [taskText, setTaskText] = React.useState("");

    function handleChange(event) {
        setTaskText(() => event.target.value);
    }

    return (
        <div className='todosInputSection'>
                <input 
                    placeholder='Enter a task...'
                    className='todoText'
                    name='todoText'
                    value={taskText}
                    onChange={handleChange}
                />
                <div className='addContainer'>
                    <button
                        className='addTodoBtn'
                        onClick={() => {props.handleAdd(taskText, setTaskText)}}
                    ><i className="fa fa-solid fa-plus"></i>
                    </button>
                </div>

                <div className='taskTypeSelection' >   
                    <select className='options' onChange={props.changeFilter}>
                        <option 
                        value="All"
                        className='selectOption'
                        >All</option>
                        <option 
                        value="Completed"
                        className='selectOption'
                        >Completed</option>
                        <option 
                        value="Not Completed"
                        className='selectOption'
                        >Not Completed</option>
                    </select>
                </div>
            </div>
    )
}

export default InputContainer
