
import { createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer"

const INITIAL_STATE = {
    // get user from local storate
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}

export const UserContext = createContext(INITIAL_STATE);

// children are the components that will be passed on this user 
export const UserContextProvider = ({ children }) => {

    // 1. init the state
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    // 2. whenever there is a user change, set it on local storage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])


    // 3. provide this state and dispatch function as context to all children
    return (
        <UserContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}>
            {children}
        </UserContext.Provider >
    )
}