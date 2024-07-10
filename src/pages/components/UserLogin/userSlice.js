
import { createSlice } from "@reduxjs/toolkit";
//ניהול ספרים - צד מנהל
const myState = {
    currentUser:null,
    usersList: [  
        { userId: 1, userName: "yuval", typeUser: 1, email: "jvhkjf@gmail.com", passwordEmail: 123456, password: 123654, image: "" },
        { userId: 2, userName: "yuval", typeUser: 3, email: "jvhkjf@gmail.com", passwordEmail: 123456, password: 123654, image: "" },
        { userId: 3, userName: "yuval", typeUser: 2, email: "jvhkjf@gmail.com", passwordEmail: 123456, password: 123654, image: "" },
        { userId: 4, userName: "yuval", typeUser: 1, email: "jvhkjf@gmail.com", passwordEmail: 123456, password: 123654, image: "" },
        { userId: 5, userName: "yuval", typeUser: 4, email: "jvhkjf@gmail.com", passwordEmail: 123456, password: 123654, image: "" }
    ]
   
}

const userSlice = createSlice({
    name: "userDevTools",
    initialState: myState,
    reducers: {
        //הרשמה
        loginOutSlice: (state) => {
            state.currentUser = null;
            localStorage.removeItem("user" );
        },
        //התחברות
        loginSlice: (state, action) => {
            state.currentUser = action.payload;
            console.log("kkk",action.payload.Id)
            localStorage.setItem("user" , JSON.stringify(state.currentUser));
        },
        //local storge
        loginSlice2: (state, action) => {
            alert(action.payload.Id) /// null
            state.currentUser = action.payload;
        },
        //הוספת משתמש
        saveAllUserssRedux: (state, action) => {
            state.usersList = action.payload;
        },
        addUser: (state, action) => {
            state.usersList.push(action.payload);
        },
        //מחיקת משתמש
        dealteUser: (state, action) => {
            let index = state.usersList.findIndex(item => item.usersList == action.payload.usersList);
            state.usersList.splice(index, 1);
        },
        //משתמש נבחר
        selectUser: (state, action) => {
            state.selectUser = action.payload;
        },
        //משתמש נבחר לעריכה
        selectUserForEdit: (state, action) => {
            state.selectUserForEdit = action.payload;
        },
        //שמירת שינויים
        saveChanges: (state, action) => {
            let index = state.usersList.findIndex(item => item.userId == action.payload.userId);
            console.log("index to update" ,index);
            state.usersList.splice(index, 1, action.payload);
            // state.booksList[index] ={...action.payload };
        },
        getAllUsers:(state,action)=>{
            state.usersList = action.payload;
        }
    }
});

export const { addUser, dealteUser, selectUser, selectUserForEdit, saveChanges ,loginSlice , loginSlice2 ,getAllUsers} = userSlice.actions;
export default userSlice.reducer;




