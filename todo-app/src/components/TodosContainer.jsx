import React from 'react'
import "../css/todosContainer.css";

const TodosContainer = () => {
    return (
        <div className='mainContainer'>
            <h1 className='todosTitle'>YOUR TO-DOs</h1>

            <div className='todosInputSection'>
                <input 
                    placeholder='Enter a task...'
                    className='todoText'
                />
                <div className='addContainer'>
                    <button
                        className='addTodoBtn'
                    ><i class="fa fa-solid fa-plus"></i>
                    </button>
                </div>

            <div className='taskTypeSelection'>   
                <select className='options'>
                    <option 
                    className='selectOption'
                    value=""
                    >All</option>
                    <option 
                    className='selectOption'
                    value=""
                    >Completed</option>
                    <option 
                    className='selectOption'
                    value=""
                    >Not Completed</option>
                </select>
            </div>

            </div>
        </div>
    )
}

export default TodosContainer
