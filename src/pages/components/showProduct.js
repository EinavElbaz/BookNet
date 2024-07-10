import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ModeIcon from '@mui/icons-material/Mode';
import { addToLove, dealteBook, saveChanges, selectBook } from '../../store/bookSlice';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
// import { UpDateBookFromServer } from './Book/BookApi';
import { red } from '@mui/material/colors';
import { display } from '@mui/system';
import { useNavigate } from 'react-router-dom';


import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem, OutlinedInput } from '@mui/material';
import { DeleteBookFromServer, UpDateBookFromServer } from './API/BookApi';
import { getAllCategoryApi } from './API/categoryApi';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavoriteBookToServer } from './API/favoriteBook';
import { dealteUser } from './UserLogin/userSlice';
import FilterWriter from './filterButton/filterWriter';
import FilterCategory from './filterButton/FilterCategory';
import './ShowProduct.css';


export default function ShowProduct(props) {

  let dis = useDispatch();
  let user = useSelector(state => state.users.currentUser);
  const book = useSelector(state => state.books.currBook);
  const books = useSelector(state => state.books.booksList);
  const color = red[100];
  let dispatch = useDispatch();
  const nav = useNavigate();
  const [checkDelete, setCheckDelete] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const [checkUpdate, setCheckUpdate] = React.useState(false);
  let [arrCategory, setArr] = useState([]);
  // let [category, setcategory] = useState();
  // console.log("booksss")
  // console.log(props.book.namebook)
  React.useEffect(() => {
   
    getAllCategoryApi().then((res) => {
      setArr(res.data);
      let t = arrCategory.find(c => c.idcategore == props.book.idCategore);
    
    }).catch()
  }, [])

  let { register, handleSubmit, formState: { errors } } = useForm(
    {
      values: props.book
    }
  );


  ///הפונקציה שאת מעדכנת איתה את הדטה ביס
  const add = (details) => {
   
    UpDateBookFromServer(details).then(res => {
     
      console.log(res.data)
      alert("העידכון בוצע בהצלחה")
    }).catch(err => {
      alert("העידכון נכשל ")
    })
  }
  //הוספה לספרים אהובים
  const addToLoveBooksFunc = () => {
    
    if (user === null) {
      alert("go to reg")
    }
    else {
      let book = {
        idBook: props.book.idbook,
        idUser: user.Id
      }
      addFavoriteBookToServer(book)
        .then((res) => {

        })
        .catch((error) => {

        })
    }
  }

  function FuncDelete() {
    DeleteBookFromServer(props.book.idbook).then(res => {
      alert("מחיקה בוצע בהצלחה")
      props.deleteBook(props.book.idbook)
    }).catch(err => {
      console.log(err)
      alert("המחיקה נכשל ")
    })
  }
  
  //dispatch(saveChanges(user));
  const updateBook = () => {
    
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
  return (
    <>

      <Card className='book' sm={{ maxWidth: 345, margin: '5%', marginTop: '80px' }} >
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
                {new Date(props.book.yearBook).getFullYear()}
              </Typography>

              <Typography variant="body2" color="text.secondary">

              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
            </CardContent> 
          </CardActionArea>
          {
            user && user.user_type_id === 1 && <Button>
              <DeleteIcon color="secondary" onClick={() => { setCheckDelete(true) }} />
            </Button>
          }


          {checkDelete == true ?
            <div id='wantToDelete'>
              האם אתה רוצה למחוק?<br />
              {/* <Button onClick={() => { dispatch(dealteBook(props.book)) }}>כן</Button> */}
              <Button onClick={FuncDelete}>כן</Button>
              <Button onClick={() => { setCheckDelete(false) }}>לא</Button>
            </div> : <div function={() => { (setCheckDelete(true)) }} > </div>}
          {
            user && user.user_type_id === 1 &&
            <Button>
              <ModeIcon color="secondary" onClick={() => { setCheckUpdate(true) }} />
            </Button>
          }
        </>
        {/* :<></>} */}
        {checkUpdate == true ?
          <form onSubmit={handleSubmit(add)}>
            <TextField required defaultValue={props.book.nameBook} name="nameBook" label="שם ספר:" variant="standard" {...register("namebook")} /><br />
        
            <TextField required defaultValue={props.book.year} type="year" name="year" label="שנת הוצאה לאור:" variant="standard" {...register("year")} /><br />
            <TextField required defaultValue={props.book.description} name="description" label="תיאור :" variant="standard" {...register("description")} /><br />
         
            <TextField required defaultValue={props.book.image} type="image" name="image" label="תמונה:" variant="standard" {...register("image")} /><br />
            <Button type="submit">עידכון</Button>
          </form>
          : <div function={() => { (setCheckUpdate(true)) }} > </div>}
        {user && user.user_type_id != 1 &&
          <Button>
            <StyledRating
              name="customized-color"
              defaultValue={0} max={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              onClick={addToLoveBooksFunc}
            />
          </Button >
        }
      </Card>

    </>
  );
}