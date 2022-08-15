import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user') || null),
    error: null,
    fetching: false
}

export const AuthContext = createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_START':
            return {
                user: null,
                error: false,
                fetching: true
            }

        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                error: false,
                fetching: false
            }
        case 'LOGIN_FAILURE':
            return {
                user: null,
                error: action.payload,
                fetching: false
            }
        default: return state
    }
}

export const AuthProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
    },[state.user])

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.clear()
        window.location.reload('/')
    }

    return(
        <AuthContext.Provider value={{ 
            user: state.user,
            error: state.error,
            fetching: state.fetching,
            dispatch,
            logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}