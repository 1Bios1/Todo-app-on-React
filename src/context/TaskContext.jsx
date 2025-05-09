
import { createContext, useReducer } from "react"


const initialTasksState = {
    tasks: [],
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