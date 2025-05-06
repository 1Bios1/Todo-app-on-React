

export default function TaskItem() {

    return (
        <>
            <div className="task">
                <div className="task__container">
                    <h1 className="task__title">Task Title</h1>

                    <p className="task__text">Task Text</p>

                    <div className="task__timer">Task Timer</div>

                    <div className="task__buttons">
                        <button className="task__completed-btn">Выполнено!</button>
                        <button className="task__stop-task-btn">Остановить выполнение</button>
                    </div>
                </div>
            </div>
        </>
    )
}