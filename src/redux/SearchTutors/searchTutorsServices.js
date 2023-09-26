import axios from "axios"
import { baseUrl } from "../../constants"

export const searchTutors =  async (token) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${baseUrl}tutor/get-tutors`, config)

    console.log(response.data)
   
    return response.data
}

const searchTutorsService = {
    searchTutors
}

export default searchTutorsService