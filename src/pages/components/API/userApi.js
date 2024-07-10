import axios from "axios"
//let baseUrl = "https://localhost:4000/user";

export const loginUserServerApi = (data) => {
    // console.log("api ", data)
    return axios.post(`http://localhost:8000/users/login`,data );
    //בשרת שאנחנונבנה או שרת שמותאם יותר יהיה קריאת של לוגיןם בד"כ בפוסט ולא בגט
}

export const signUpServerApi = (data) => {
    
    return axios.post(`http://localhost:8000/users/user`,data );
    //בשרת שאנחנונבנה או שרת שמותאם יותר יהיה קריאת של לוגיןם בד"כ בפוסט ולא בגט
}

export const getAllUsersApi = () => {
    return axios.get(`http://localhost:8000/users/getUsers`);
    //בשרת שאנחנונבנה או שרת שמותאם יותר יהיה קריאת של לוגיןם בד"כ בפוסט ולא בגט
}



