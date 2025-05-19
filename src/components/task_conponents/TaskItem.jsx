import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

export function TaskItem({ task }) {
    const { dispatch } = useContext(TaskContext)

    const formatDate = (dateString) => {
        if (!dateString) return "Нет дедлайна";
        const date = new Date(dateString);
        return date.toLocaleString();
    }

    const handleDelete = () => {
        dispatch({ type: 'DELETE_TASK', payload: { id: task.id } })
    }

    const handleComplete = () => {
        dispatch({ type: 'TASK_COMPLETED', payload: { id: task.id } })
    }

    return (
        <div className={`task ${task.isExpired ? '__expired' : ''}`}>
            <div className="task__container">
                <h1 className="task__time-of-create">
                    Создано: {new Date(task.createdAt).toLocaleString()}
                </h1>
                
                <h1 className="task__header">{task.title}</h1>
                
                <p className="task__text">{task.text}</p>
                
                <div className="task__meta">
                    <p>Выполнить до: {formatDate(task.deadline)}</p>
                    <p>Времени осталось: {task.isExpired ? 'Просрочено' : task.timeLeft || 'Нет дедлайна'}</p>
                </div>
                
                {
                    task.isExpired ? (
                        <div className="task__phrase">
                            Вы провалили задание, задание пропадет через 30 секунд
                        </div>
                    ) : ( 
                        <div className="task__buttons">
                            <button className="task__succsed-btn" onClick={handleComplete}>
                                Задание выполнено!
                            </button>
                            <button className="task__fail-btn" onClick={handleDelete}>
                                Задание не выполнено - Удалить
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}