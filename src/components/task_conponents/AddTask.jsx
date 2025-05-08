
import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function AddTask() {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')

    const { dispatch } = useContext(TaskContext)

    const hadleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return;
        dispatch({type: 'AddTask', title, text})
        setTitle('')
        setText('')
    }

    return (
        <form onSubmit={hadleSubmit}>
            <input 
                type="text" 
                onChange={(e) = setTitle(e.target.value)}
                placeholder="Введите заголовок"
            />
            <input 
                type="textarea" 
                onChange={(e) = setText(e.target.value)}
                placeholder="Введите текст"
            />

            <button type="submit">Добавить</button>
        </form>
    )

}