


export function TaskItem({ taskID, taskTitle, taskText }) {

    return (
        <>
            <div className="task" key={taskID}>
                <div className="task__container">

                   <h1 className="task__header">{ taskTitle }</h1>

                   <p className="task__text">
                        { taskText } 
                   </p>

                   <div className="task__deadline">Task deadline</div>

                   <div className="task__buttons">
                        <button className="task__succsed-btn">Task Completed!</button>
                        <button className="task__fail-btn">Stop completing task</button>
                   </div>

                </div>
            </div>
        </>
    )
}