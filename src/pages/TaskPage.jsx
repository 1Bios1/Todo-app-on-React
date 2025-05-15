import AddTask from "../components/task_conponents/AddTask";
import TaskList from "../components/task_conponents/TaskList";
import TaskProvider from "../context/TaskContext";

export default function TaskPage() {

    return (
        <>
            <h1>Your tasks</h1>

                <AddTask />
                <TaskList />
        
        </>
    )
}