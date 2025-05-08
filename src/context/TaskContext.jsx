
import { createContext, useReducer } from "react"

const initialState = {
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
                            title: action.title,
                            text: action.text,
                        }
                    ]
            }
        default:
            state
    }
}

export const TaskContext = createContext()

export default function TaskProvider({ children }) {

    const [state, dispatch] = useReducer(taskReducer, initialState)

    const value = {state, dispatch}

    return (
        <>
            <TaskContext.Provider value={value}>
                { children }
            </TaskContext.Provider>
        </>
    )
}