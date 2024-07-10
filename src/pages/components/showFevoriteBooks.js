import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { selectBook } from '../../store/bookSlice';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { getAllCategoryApi } from './API/categoryApi';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dealteFavoriteBookFromServer } from './API/favoriteBook';



export default function ShowFavorieBooks(props) {
  let user = useSelector(state => state.users.currentUser);
  const book = useSelector(state => state.books.currBook);
  const books = useSelector(state => state.books.booksList);
  const color = red[100];
  let dispatch = useDispatch();
  const nav = useNavigate();
  let [arrCategory, setArr] = useState([]);
  let [category, setcategory] = useState();

  React.useEffect(() => {
    getAllCategoryApi().then((res) => {
      setArr(res.data);
      let t = arrCategory.find(c => c.idcategore == props.book.idCategore);
      setcategory(t)
    }).catch()
  }, [])

//   let { register, handleSubmit, formState: { errors } } = useForm(
//     {
//       values: props.book
//     }
//   );

//   //מחיקה מספרים אהובים
//   const dealteLoveBooksFunc = () => {
//     if (user === null) {
//       alert("go to reg")
//     }
//     else {
//       let book = {
//         idBook: props.book.idbook,
//         idUser: user.Id
//       }   
//       dealteFavoriteBookFromServer(book.idBook)   
//         .then((res) => {

//         })
//         .catch((error) => {

//         })
//     }
//   }
  //dispatch(saveChanges(user));
  const updateBook = () => {
    console.log(props.book)
    dispatch(selectBook(props.book))
   
    nav("/OneBook")
  }

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
  
  return <>{props.book &&
      <Card sx={{ maxWidth: 345, flexWrap: 'wrap', margin: '30px', marginTop: '80px', display: 'flex' }} >
        <>
          <CardActionArea onClick={(() => (updateBook()))}>
            <CardMedia

              component="img"
              height="140"
              image={'/image/image for final project/' + props.book.imagBook}
              alt="book"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {props.book.namebook}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {props.book.name} ,{new Date(props.book.yearBook).getFullYear()}
              </Typography>

              <Typography variant="body2" color="text.secondary">

              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
            </CardContent>
          </CardActionArea>
        </>
        {user && user.user_type_id != 1 &&
          <Button>
            <StyledRating
              name="customized-color"
              defaultValue={1} max={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            //   onClick={dealteLoveBooksFunc}
            />
          </Button >
        }
      </Card>
      }
    </>
}