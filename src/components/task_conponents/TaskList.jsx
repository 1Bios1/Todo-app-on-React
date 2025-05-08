import { TaskItem } from "./TaskItem"

export default function TaskList() {

  

    return (
        <>
            <div className="tasks">
                <div className="tasks__container">
                    {
                        tasks.map((task) => {
                            return <TaskItem taskID={task.id} taskTitle={task.title} taskText={task.text}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}