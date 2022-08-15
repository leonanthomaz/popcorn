import axios from "axios";

// const backendURL = REACT_APP_BASE_URL_BACKEND ? REACT_APP_BASE_URL_BACKEND : 'http://localhost:3333'
const BASE_URL = process.env.REACT_APP_BASE_URL_BACKEND

export const ApiBackend = axios.create({
    baseURL: BASE_URL
})

export const loginStart = async (credentials, dispatch) => {
    dispatch({ type: 'LOGIN_START'})
    try{
        const response = await ApiBackend.post("/auth/login", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    }catch(error){
        dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.msg });
    }
}


