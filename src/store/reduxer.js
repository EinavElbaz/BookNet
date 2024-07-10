import { createSlice } from "@reduxjs/toolkit";

const { TurnedInOutlined } = require("@mui/icons-material");

const myState = {
    books: [
    ],
    category: [
    ],
    users: [
    ],
    writer: [
    ],
    parts: [  
    ],
    typeUser: [
        { idUser: 1, type: "מנהל" },
        { idUser: 2, type: "סופר" },
        { idUser: 3, type: "פרימיום" },
        { idUser: 4, type: "רגיל" }
    ],
    primium: [
        { yaer: 5, qtyBooks: 5 },
        { yaer: 3, qtyBooks: 7 },
        { yaer: 2, qtyBooks: 5 },
        { yaer: 7, qtyBooks: 15 },
        { yaer: 5, qtyBooks: 30 }
    ],
   
    massage: [
        { id: 1, date: "10/02/2003", idSend: 8, idGet: 6, desc: " nbhbfjhdvfvbiuff " },
        { id: 2, date: "10/02/2003", idSend: 8, idGet: 6, desc: " nbhbfjhdvfvbiuff " },
        { id: 3, date: "10/02/2003", idSend: 8, idGet: 6, desc: " nbhbfjhdvfvbiuff " },
        { id: 4, date: "10/02/2003", idSend: 8, idGet: 6, desc: " nbhbfjhdvfvbiuff " }
    ],
    
   
    selectedBook: null,
    selectedBookForEdit: null
}
export const appReducer = (state = myState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}