import { createSlice } from "@reduxjs/toolkit";
//ניהול ספרים - צד מנהל
const myState = {
    currentVideos:null,
   
    videosList: [
    ],
}

const videosSlice = createSlice({
    name: "VideoDevTools",
    initialState: myState,
    reducers: {
        
        //local storge
        videoSlice: (state, action) => {
            state.currentVideos = action.payload;
        },
        //הוספת סרטון
        saveAllVideosRedux:(state,action)=>{
            state.videosList = action.payload;
        },
        // addVideos: (state, action) => {
        //     state.videosList.push(action.payload);
        // },
        //  מחיקת סרטון
        deleteVideos: (state, action) => {
            // let index = state.videosList.findIndex(item => item.idVideo == action.payload.idVideo);
            // state.videosList.splice(index, 1);
            let arr=state.videosList.filter(obj=>obj.Id_Videos!=action.payload)
            state.videosList=arr;
            
        },
       
        getAllVideos:(state,action)=>{
            state.videosList = action.payload;
        }
    }
});

export const {videoSlice,getAllVideos,deleteVideos,addVideos,saveAllVideosRedux} = videosSlice.actions;
export default videosSlice.reducer;




