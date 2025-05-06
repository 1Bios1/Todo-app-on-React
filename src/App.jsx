
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import DailyTasks from "./pages/DailyTasks"
import WeeklyTasks from "./pages/WeeklyTasks"

export default function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/everyday-tasks" element={<DailyTasks />}/>
                <Route path="/weekly-tasks" element={<WeeklyTasks />}/>
            </Routes>
        </>
    )
}