import axios from "axios";
let baseu="http://localhost:8000/books";
//שליפת כל המוצרים
export const getAllBookFromServer=()=>{
    return axios.get(`${baseu}/getBooks`);
}
//הוספת מוצר
export const addNewBookToServer=(newBook)=>{
    
    return axios.post(`${baseu}/books`,newBook)
}

///מחיקה המוצר לפי אינדקס מdb
export const DeleteBookFromServer=(id)=>{
    console.log(id)
    return axios.delete(`${baseu}/books/${id}`)
}
///עידכון
export const UpDateBookFromServer=(details)=>{
    return axios.put(`${baseu}/books`,details)
}
///סימניהbbbb
export const getMarkFromServer=(idBook, idUser)=>{
    return axios.get(`${baseu}/getMark/`+idBook+"/"+idUser)
}


export const addMarkToServer=(mark)=>{
    return axios.post(`${baseu}/marks`, mark);
}

export const updateMarkToServer=(mark)=>{
    return axios.put(`${baseu}/updatemark`, mark);
}
export const getIdPageFromServer=(details)=>{
    return axios.get(`${baseu}/getidpage`, details);
}