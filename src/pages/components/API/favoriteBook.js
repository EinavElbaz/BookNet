import axios from "axios";
let baseu = "http://localhost:8000/favorite";
// הוספת ספר אהוב
export const addFavoriteBookToServer = (book) => {
    return axios.post(`${baseu}/addFavoriteBook`, book);
}
// מחיקת ספר אהוב
export const dealteFavoriteBookFromServer=(id)=>{
    return axios.delete(`${baseu}/${id}`)
}
//שליפת כל המוצרים
export const getFavoriteBookToServer = (id) => {
    
    return axios.get(`${baseu}/getAllFavoriteBook/${id}`);
}