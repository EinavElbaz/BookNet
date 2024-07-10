
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../navBar.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect } from 'react';
import { addMarkToServer, getMarkFromServer } from '../API/BookApi';
import { useState } from 'react';



const OneBook = () => {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });
    let navigate = useNavigate();
    // let parts = useSelector(state => state.books.parts);
    const book = useSelector(state => state.books.currBook);
    let user = useSelector(state => state.users.currentUser);
    let parts = book.pages;
    const [mark, setMark] = useState(null);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
console.log("parts: ",parts)
console.log("book: ",book)
    useEffect(() => {
        (user && book) &&
            getMarkFromServer(book.idbook, user.Id).then(res => {
                const m = res.data;

                if (m != "") {
                    setMark(m);
                    const index = book.pages.findIndex(p => p.idPage == m.idPage);
                    setCurrentPageIndex(index);
                }
                else {
                    const newMark = {
                        idbookmarks: 0,
                        idBook: book.idbook,
                        idUser: user.Id,
                        idPage: parts[0].idPage

                    };

                    addMarkToServer(newMark).then(res => {

                        newMark.idbookmarks = res.data.idmark;
                        setMark(newMark);
                        setCurrentPageIndex(0);
                    }).catch(err => {
                        console.log(err);
                    })


                }

            }).catch(err => {
                console.log(err);
            });
    }, [])


    return (
        <div>
            <CardMedia
                component="img"
                height="140"
                image={'/image/image for final project/' + book.imagBook}


            />
            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                    {book.namebook}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.descreption}
                </Typography>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },

                    }}
                >
                    <StyledRating
                        name="customized-color"
                        defaultValue={0}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        // precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                </Box>
                <Stack direction="row" spacing={2}>
                    {
                        parts && parts.length > 0 &&

                        parts.map((b, i) =>

                            <Button id="partButtom" style={{ backgroundColor: i < currentPageIndex ? "grey" : "pink" }}
                                onClick={() => {
                                    navigate(`/PartBook/${i}`)
                                }} variant="contained">פרק {i + 1}  </Button>)}
                    {
                    }
                </Stack>
            </CardContent>
        </div>

    );
}






export default OneBook;