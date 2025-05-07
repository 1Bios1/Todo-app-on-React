
import { Routes, Outlet } from "react-router-dom"

export default function HomePage() {
    
    return (
        <>
            <h1>This is a home page</h1>

            <Outlet />
        </>
    )
}