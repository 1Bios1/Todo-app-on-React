// components imports
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

// libraries and stuff imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TaskPage from "./pages/TaskPage";

export default function App() {

    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/tasks" element={<TaskPage />}/>
            </Routes>
        </Router>
    )
}