
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
                </ul>
            </nav>
        </>
    )
}