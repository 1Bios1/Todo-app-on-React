
import { createContext, useReducer } from "react"

const initialTasksState = {
    tasks: [],
    completedTasks: [],
}

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
                            completed: false,
                            completedAt: null,
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