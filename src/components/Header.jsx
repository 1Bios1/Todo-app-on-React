
import { Link } from "react-router-dom"

export default function Header() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            На главную!
                        </Link>
                    </li>
                    <li>
                        <Link to="/tasks">
                            К заданиям!
                        </Link>
                    </li>
                    <li>
                        <Link to='/completed-tasks'>
                            Выполненые задания
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}