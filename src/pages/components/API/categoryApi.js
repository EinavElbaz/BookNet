import axios from "axios"
let baseUrl = "http://localhost:8000/category"
//שליפת הפוטר  
export const getAllCategoryApi = () => {
    return axios.get(`${baseUrl}/getCategory`)
}