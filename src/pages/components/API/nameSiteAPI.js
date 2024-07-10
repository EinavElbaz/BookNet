import axios from "axios"
let baseUrl="http://localhost:8000/nameSite"
//שליפת שם האתר 
export const getNameSite=()=>{
    return axios.get(`${baseUrl}/getNameSite`)
}
//עידכון שם האתר
export const updateNameSite=(nameSite)=>{
    return axios.get(`${baseUrl}/updateNameSite`,nameSite)
}