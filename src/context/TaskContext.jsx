
import { createContext, useReducer, useEffect } from "react"

const initialTasksState = {
    tasks: [],
    completedTasks: [],
}

const calculateTimeLeft = (deadlineISO) => {
    if (!deadlineISO) return null;
    
    const now = new Date();
    const deadline = new Date(deadlineISO);
    const diffMs = deadline - now;
  
    if (diffMs <= 0) return "Просрочено";
  
    const diffSec = Math.floor(diffMs / 1000);
    const hours = String(Math.floor(diffSec / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((diffSec % 3600) / 60)).padStart(2, '0');
    const seconds = String(diffSec % 60).padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds}`;
};


function taskReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: 
                    [
                    ...state.tasks, 
                        {
                            id: Date.now(),
                            title: action.payload.title,
                            text: action.payload.text,
                            deadline: action.payload.deadline,
                            isExpired: false,
                            completed: false,
                            completedAt: new Date().toISOString(),
                            timeLeft: calculateTimeLeft(action.payload.deadline)
                        }
                    ]
            }

        case 'DELETE_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter((task) => {
                        return task.id !== action.payload.id
                    })
                ]
            }

        case 'UPDATE_TIMERS':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    const isExpired = task.deadline && new Date(task.deadline) < new Date();
                    return {
                        ...task,
                        isExpired,
                        timeLeft: calculateTimeLeft(task.deadline),
                    }
                })
            }

        case 'CLEAR_EXPIRED':
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.isExpired)
            };

        case 'TASK_COMPLETED':

            const completedTask = state.tasks.find((task) => task.id === action.payload.id);
            if (!completedTask) return state;
            

            return {
                ...state,
                tasks:
                    state.tasks.filter((task) => {
                        task.id !== action.payload.id
                    })
                ,

                completedTasks: [
                    ...state.completedTasks,
                    {
                        ...completedTask,
                        completed: true,
                        completedAt: new Date().toISOString(),
                    }
                ]

            }
        
        
        default:
            return state
    }
}

export const TaskContext = createContext()

export default function TaskProvider({ children }) {

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({ type: 'UPDATE_TIMERS' });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const cleaner = setInterval(() => {
            dispatch({ type: 'CLEAR_EXPIRED' });
        }, 30000); 

        return () => clearInterval(cleaner);
    }, []);

    const [state, dispatch] = useReducer(taskReducer, initialTasksState)

    const value = {state, dispatch}

    return (
        <>
            <TaskContext.Provider value={value}>
                { children }
            </TaskContext.Provider>
        </>
    )
}