import React from 'react'
import Task from "./Task";
import "../css/todosContainer.css";
import InputContainer from './InputContainer';

const TodosContainer = () => {
    const [filter, setFilter] = React.useState("All")
    const [tasksList, setTasksList] = React.useState([]);
    const [finishedTasks, setFinishedTasks] = React.useState([]);
    const [unfinishedTasks, setUnfinishedTasks] = React.useState([])
    const tasks = tasksList.map((task) => {
        return <Task 
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    k={task.key}
                    text={task.text}
                    completed={task.completed}
                />
    });
    
    function handleAdd(task, setTasksText) {
        if (task.length < 2) return;
        setTasksList(prevTasks => {
            return [{text: task, completed: false, key: tasksList.length}, ...prevTasks];
        })
        setTasksText("");
        setUnfinishedTasks(() => {
            const newTasks = []

            for (let t of tasksList) {
                if (!t.completed) {
                    newTasks.push(<Task 
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                        k={t.key}
                        text={t.text}
                        completed={false}
                    />);
                }
            }


        })
    }

    function deleteTask(k) {
        setTasksList(prevTasks => {
            let index = 0;
            for (let task of prevTasks) {
                if (task.k === k) {
                    index = task;
                    break;
                }
            }

            index = prevTasks.indexOf(index);

            let newTasks = prevTasks.slice(0, index);
            newTasks = newTasks.concat(prevTasks.slice(index + 1));
            return newTasks;
        })

        setFinishedTasks(prevTasks => {
            let index = 0;
            for (let task of prevTasks) {
                console.log(k)
                if (task.k === k) {
                    index = task;
                    break;
                }
            }

            index = prevTasks.indexOf(index);

            let newTasks = prevTasks.slice(0, index);
            newTasks = newTasks.concat(prevTasks.slice(index + 1));
            return newTasks;
        })

    }

    function completeTask(index) {
        setTasksList(prevTasks => {
            prevTasks[index].completed = true;
            return prevTasks;
        })
        
        setFinishedTasks(prevTasks => {
            const currentTask = tasksList[index];
            return [
                <Task 
                    deleteTask={deleteTask}
                    keyNum={index}
                    text={currentTask.text}
                    completed={true}
                />
                ,...prevTasks
            ]
        })
        deleteTask(index);
    }

    function changeFilter(event) {
        const { value } = event.target;
        setFilter(value);
    }

    let currentTasksShowing = tasks;
    if (filter === "Completed") currentTasksShowing = finishedTasks;
    else if (filter === "Not Completed") currentTasksShowing = unfinishedTasks; 

    return (
        <div className='mainContainer'>
            <h1 className='todosTitle'>YOUR TO-DOs</h1>
            <InputContainer 
                handleAdd={handleAdd}
                changeFilter={changeFilter}
            />
            {currentTasksShowing}
            
        </div>
    )
}

export default TodosContainer
