
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import OneBook from './OneBook';
const AllBook = () => {
    const navigate = useNavigate();
    const books = useSelector(state => state.books.parts)
    return (
        <Box sx={{ display: 'flex', alignContent: 'stretch', flexWrap: 'wrap' }}>
            {books.map(b => <p><OneBook book={b} /></p>)}
        </Box>
    );
}

export default AllBook;