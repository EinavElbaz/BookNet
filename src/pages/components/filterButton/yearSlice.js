import { createSlice } from "@reduxjs/toolkit";

//כל השנים
const myState = {
    years: [],
}
const yearSlice = createSlice({
    name: "yaerDevTools",
    initialState: myState,
    reducers: {
        getYear:(state,action)=>{
            state.categorys = action.payload;
        }
    }
});
export const {getYear} = yearSlice.actions;
export default yearSlice.reducer;