import React from 'react'
import "../css/task.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Task = () => {
    return (
        <div className='taskContainer'>
            <div className='taskBody'>
                <p className='taskText'>
                    text task
                </p>
            </div>

            <div className='todoControls'>
                <button
                    className="finishTask"
                ><i class="fa sharp fa-solid fa-check"></i>
                </button>
                <button
                    className="deleteTask"
                >
                    x
                </button>
            </div>

        </div>
    )
}

export default Task
