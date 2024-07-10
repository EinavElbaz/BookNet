import { ImportantDevices } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
//ניהול ספרים - צד מנהל
const myState = {
    currBook: null,
    parts: [
    ],
    booksList: [
    ],
    category: [],
    year: [],
    writer: [],
    txt: "",
    filterBooks: []
}
const bookSlice = createSlice({
    name: "bookDevTools",
    initialState: myState,
    reducers: {
        //הוספת ספר
        saveAllBooksRedux: (state, action) => {
            state.booksList = action.payload;
        },
        addBook: (state, action) => {
            state.booksList.push(action.payload);
        },
        //מחיקת ספר
        dealteBook: (state, action) => {

            let index = state.booksList.findIndex(item => item.idBook == action.payload.idBook);
            console.log(index)
            state.booksList.splice(index, 1);
        },                     
        //ספר נבחר
        selectBook: (state, action) => {
            console.log("selectBook")
            console.log(action.payload)
            state.currBook = action.payload;
            console.log(state.currBook)
        },
        //ספר נבחר לעריכה
        selectBookForEdit: (state, action) => {
            state.selectedBookForEdit = action.payload;
        },
        //ספר אהוב
        addToLove: (state, action) => {
            state.booksList.push(action.payload);
        },
        //שמירת שינויים
        saveChanges: (state, action) => {
            let index = state.booksList.findIndex(item => item.idBook == action.payload.idBook);
            console.log("index to update", index);
            state.booksList.splice(index, 1, action.payload);
            // state.booksList[index] ={...action.payload };
        },
        saveYears: (state, action) => {
            state.year = action.payload;
        },
        saveCategoy: (state, action) => {
            state.category = action.payload;

        },
        saveWriter: (state, action) => {
            state.writer = action.payload;
        },
        saveTxt: (state, action) => {
            state.txt = action.payload;
        },
        filter: (state, action) => {

            let arr = [];
            if (state.category.length > 0) {
                for (let i = 0; i < state.category.length; i++) {
                    for (let j = 0; j < state.booksList.length; j++) {
                        if (state.category[i].idCategory === state.booksList[j].category) {
                            arr.push(state.booksList[j])
                        }
                    }
                }
            }
            state.filterBooks = arr;

            if (state.year.length > 0) {

            }
            if (state.writer.length > 0) {

            }
            if (state.txt != "") {

            }
        }
    }
});

export const { addBook, dealteBook,addToLove, selectBook, selectedBookForEdit, saveChanges,
    saveCategoy, saveYears, saveTxt, saveWriter, filter  , saveAllBooksRedux } = bookSlice.actions;
export default bookSlice.reducer;
