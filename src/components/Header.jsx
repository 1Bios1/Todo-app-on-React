
import { Link } from "react-router-dom"

export default function Header() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Главная страница!
                        </Link>
                    </li>

                    <li>
                        <Link to='/everyday-tasks'>
                            Ежедневные задачи!
                        </Link>
                    </li>

                    <li>
                        <Link to='/weekly-tasks'>
                            Еженедельные задачи!
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}