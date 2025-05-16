
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Register({ onRegister }) {

    const [username, setUserName] = useState('')
    const [password, setPassWord] = useState('')

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePassWord = (e) => {
        setPassWord(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem(username, password)
        onRegister()
        alert('Вы успешно зарегистрировались!')
    }

    return (
        <>
            <form action="POST" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Имя пользователя"
                    onChange={handleUserName}
                />
                <input 
                    type="password" 
                    placeholder="Пароль"
                    onChange={handlePassWord}
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
            
            <button>
                <Link to='/'>
                    Или у вас уже есть аккаунт? Войти
                </Link>
            </button>
        </>
    )
}