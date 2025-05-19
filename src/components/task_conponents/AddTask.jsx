
import { TaskContext } from "../../context/TaskContext";
import { useContext, useState } from "react";

export default function AddTask() {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState('')

    const { dispatch } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim() || !title.trim()) return;
    
        dispatch(
            {
                type: 'ADD_TASK', 
                payload: {
                    title, 
                    text,
                    deadline: deadline || null,
                }
            }
        )

        setTitle('')
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите заголовок"
                className="task-title-input"
            />
            <textarea
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите текст"
                className="task-text-input"
            />
            <input 
                type="datetime-local" 
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="Введите дату задачи"
            />

            <button type="submit">Добавить</button>
        </form>
    )

}