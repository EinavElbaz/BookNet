import axios from "axios"
let baseUrl="http://localhost:8000/footer"
//שליפת הפוטר  
export const getFooter=()=>{
    return axios.get(`${baseUrl}/getFooter`)
}
//עדכון הפוטר
export const updateFooter=(updateFooter)=>{
    return axios.get(`${baseUrl}/updateFooter`,updateFooter)
}