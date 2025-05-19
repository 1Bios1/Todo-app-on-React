import { TaskItem } from "./TaskItem"
import { TaskContext } from "../../context/TaskContext"
import { useContext } from "react"

export default function TaskList() {

    const { state } = useContext(TaskContext)

    return (
        <>
            <div className="tasks">
                <div className="tasks__container">
                    {
                        state.tasks.map((task) => {
                            return <TaskItem task={task} key={task.id}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}