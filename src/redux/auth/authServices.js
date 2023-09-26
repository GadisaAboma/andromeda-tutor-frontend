import axios from "axios"
import { baseUrl } from "../../constants"

export const register =  async (userData) => {
    const response = await axios.post(`${baseUrl}auth/register`, userData)
    if(response.data) {
        localStorage.setItem('currentUser', JSON.stringify(response.data));
    }
    return response.data
}
export const login =  async (userData) => {
   
    const response = await axios.post(`${baseUrl}auth/login`, userData)
    if(response.data) {
        localStorage.setItem('currentUser', JSON.stringify(response.data));
    }
    return response.data
}

export const logout = () => {
    localStorage.removeItem('currentUser');
}

const authService = {
    login,
    register,
    logout
}

export default authService