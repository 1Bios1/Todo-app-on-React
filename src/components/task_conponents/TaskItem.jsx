


export function TaskItem() {

    return (
        <>
            <div className="task">
                <div className="task__container">

                   <h1 className="task__header">This is task header</h1>
                   <p className="task__text">This is task header</p>
                   <div className="task__deadline">Task deadline</div>

                   <div className="task__buttons">
                        <button className="task__succsed-btn">Task Completed!</button>
                        <div className="task__fail-btn">Stop completing task</div>
                   </div>

                </div>
            </div>
        </>
    )
}