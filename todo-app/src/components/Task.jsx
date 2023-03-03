import React from 'react'
import "../css/task.css"

const Task = (props) => {
    console.log(props);
    return (
        <div className='taskContainer'>
            <div className='taskBody'>
                <p className='taskText'>
                    {props.text}
                </p>
            </div>

            <div className='todoControls'>
                {!props.completed && <button
                        className="finishTask"
                        onClick={() => props.completeTask(props.k)}
                        ><i className="fa sharp fa-solid fa-check"></i>
                    </button>}
                <button
                    className="deleteTask"
                    onClick={() => props.deleteTask(props.k)}
                >
                    x
                </button>
            </div>

        </div>
    )
}

export default Task
