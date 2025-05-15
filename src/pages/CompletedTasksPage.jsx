
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function CompletedTasksPage() {

    const { state } = useContext(TaskContext)

    return (
        <div className="completed-tasks">
            <div className="completed-tasks__container">

            {
                state.completedTasks.map(task => (
                    <div key={task.id}>
                        <h3>{task.title}</h3> 
                        <p>{task.text}</p>
                        <small>
                            Завершено: {new Date(task.completedAt).toLocaleString()}
                        </small>
                    </div>
                ))
            }
                
            </div>
        </div>
    )
}