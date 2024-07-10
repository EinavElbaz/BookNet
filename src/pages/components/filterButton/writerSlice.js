import { createSlice } from "@reduxjs/toolkit";

//כל הסופרים
const myState = {
    writers: [

    ],
}
const writerSlice = createSlice({
    name: "writerDevTools",
    initialState: myState,
    reducers: {
        getWriter:(state,action)=>{
            state.categorys = action.payload;
        }
    }
});
export const {getWriter} = writerSlice.actions;
export default writerSlice.reducer;