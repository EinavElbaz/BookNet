import { createSlice } from "@reduxjs/toolkit";

//כל הקטגוריות
const myState = {
    categorys: [
       
     ],
}
const categorySlice = createSlice({
    name: "bookDevTools",
    initialState: myState,
    reducers: {
        getCategories:(state,action)=>{
            state.categorys = action.payload;
        }
    }
});

export const {getCategories} = categorySlice.actions;
export default categorySlice.reducer;