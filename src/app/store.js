import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../pages/components/filterButton/categorySlice";
import writerSlice from "../pages/components/filterButton/writerSlice";
import yearSlice from "../pages/components/filterButton/yearSlice";
import userSlice from "../pages/components/UserLogin/userSlice";
import bookSlice from "../store/bookSlice";
import videosSlice from "../pages/components/videosSlice";

export const store = configureStore({
    reducer: {
        books:bookSlice,
        categories:categorySlice,
        writerss:writerSlice,
        yearss:yearSlice,
        categories:categorySlice,
        users:userSlice,
        videos:videosSlice
    }
})

    
