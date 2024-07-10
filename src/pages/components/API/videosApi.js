import axios from "axios"
//let baseUrl = "https://localhost:4000/user";
let baseu="http://localhost:8000/video";
export const getVideosFromServer = () => {
    return axios.get(`${baseu}`);
    //בשרת שאנחנונבנה או שרת שמותאם יותר יהיה קריאת של לוגיןם בד"כ בפוסט ולא בגט
}
///מחיקה סרטון לפי אינדקס מdb
export const DeleteVideosFromServer=(id)=>{
    console.log(id)
    return axios.delete(`${baseu}/deleteVideo/${id}`)
}
// הוספת סרטו
export const addNewVideosToServer=(newVideos)=>{
    console.log("newVideos")
    console.log(newVideos)
    return axios.post(`${baseu}/addVideo`,newVideos)
}