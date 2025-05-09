
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

const now = new Date();
const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
const year = now.getFullYear();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

const currentTime = `${day}.${month}.${year} ${hours}:${minutes}`;


export function TaskItem({ taskID, taskTitle, taskText }) {

    const { dispatch } = useContext(TaskContext)

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_TASK',
            payload: {
                id: taskID,
            }
        })
    }

    return (
        <>
            <div className="task" key={taskID}>
                <div className="task__container">
                    <h1 className="task__time-of-create">создано: { currentTime }</h1>

                   <h1 className="task__header">{ taskTitle }</h1>

                   <p className="task__text">
                        { taskText } 
                   </p>

                   <div className="task__buttons">
                        <button className="task__succsed-btn" >Task Completed!</button>
                        <button className="task__fail-btn" onClick={handleDelete}>Stop completing task</button>
                   </div>

                </div>
            </div>
        </>
    )
}