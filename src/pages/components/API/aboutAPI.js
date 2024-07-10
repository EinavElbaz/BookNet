import axios from "axios"
let baseUrl="http://localhost:8000/about"
//שליפת המידע מדף האודות
export const getAbout=()=>{
    return axios.get(`${baseUrl}/getAbout`)
}
//עידכון דף האודות
export const updateAbout=(about)=>{
    return axios.get(`${baseUrl}/updateAbout`,about)
}