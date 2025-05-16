// components imports
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

// libraries and stuff imports
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskPage from "./pages/TaskPage";
import TaskProvider from "./context/TaskContext";
import CompletedTasksPage from "./pages/CompletedTasksPage";
import Register from "./components/authorisation_components/Register";
import Login from "./components/authorisation_components/Login";

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleRegister = () => {
        setIsLoggedIn(false)
    }

    const handleLoggin = () => {
        setIsLoggedIn(true)
    }

    return (
        <>
            <Router>
                {
                    isLoggedIn ? (
                            <TaskProvider>
                                <Header />
                                <Routes>
                                    <Route path="/" element={<MainPage />} />
                                    <Route path="/tasks" element={<TaskPage />} />
                                    <Route path="/completed-tasks" element={<CompletedTasksPage />} />
                                </Routes>
                            </TaskProvider>
                        
                    ) : (
                        <Routes>
                            <Route index path="/" element={<Login onLogin={handleLoggin} />}/>
                            <Route path="/register" element={<Register onRegister={handleRegister}/>} />
                        </Routes>
                    )
                }
            </Router>
        </>
    );
}