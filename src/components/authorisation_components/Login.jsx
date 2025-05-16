
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login({ onLogin }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const getpassword = localStorage.getItem(username)

        if (getpassword && getpassword === password) {
            alert('Вы успешно вошли в аккаунт!')
            onLogin()
        } else {
            alert('Неверное имя пользователя или пароль!')
        }
    }

    return (
        <>
            <form action="POST" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Логин"
                    onChange={handleUsername}
                />
                <input 
                    type="password" 
                    placeholder="Пароль"
                    onChange={handlePassword}
                />
                <button type="submit">Войти</button>
            </form>

            <button>
                <Link to='/register'>
                    Нет аккаунта или хотите создать новый? - Зарегистрироваться
                </Link>
            </button>
        </>
    )
}