// components imports
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

// libraries and stuff imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TaskPage from "./pages/TaskPage";
import TaskProvider from "./context/TaskContext";
import CompletedTasksPage from "./pages/CompletedTasksPage";

export default function App() {

    return (
        <Router>
            <TaskProvider>
                <Header />

                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/tasks" element={<TaskPage />}/>
                    <Route path="/completed-tasks" element={<CompletedTasksPage />}/>
                </Routes>
            </TaskProvider> 
        </Router>
    )
}