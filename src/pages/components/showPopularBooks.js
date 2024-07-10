import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import "../components/filterButton//filter.css"
import "../components/navBar.css"
import ShowPopularBook from "./showPopularBook";
import { saveAllBooksRedux, selectBook } from "../../store/bookSlice";
import { getAllBookFromServer } from "./API/BookApi";
///לבדוק את השמות בעמוד הזהההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההה
const ShowPopularBooks = () => {
    const books = useSelector(state => state.books.booksList);
    const navigate = useNavigate();
    const display = useDispatch();
    React.useEffect(()=>{
        getAllBookFromServer()
        .then((res)=>{
            console.log(res.data)
            display(saveAllBooksRedux(res.data))
        })
        .catch((error)=>{})
    },[])
    return (
        <div class="container">
            <h1>the popular books</h1>            
            <Box sx={{ display: 'flex' }} >
                {books.map(b => <ShowPopularBook book={b} onClick={() => { navigate(`OneBook=(${b.isPopular==1})`) }} />)}
            </Box>
        </div>);
}

export default ShowPopularBooks;