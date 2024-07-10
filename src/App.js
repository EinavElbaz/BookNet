import './App.css';
import Enter from './pages/components/UserLogin/enter';
import Login from './pages/components/UserLogin/login';
import { Route, Routes } from 'react-router-dom';
import ShowProducts from "../src/pages/components/showProducts";
import ShowUsers from './pages/components/manegerPage/showUsers';
import FormDialog from './pages/components/UserLogin/enterOrLogin';
import AddProduct from './pages/components/manegerPage/addProduct';
import FilterYear from './pages/components/filterButton/filterYear';
import FilterWriter from './pages/components/filterButton/filterWriter'
// import ThePopular from './pages/components/thePopular';
import About from './pages/components/about';
// import Game from './pages/components/game';
import NavBar from './pages/components/navBar';
import SearchAppBar from './pages/components/saerch';
import TemporaryDrawer from './pages/components/dmckjldnd';
import FilterCategory from './pages/components/filterButton/FilterCategory';
import { pink } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PartBook from './pages/components/Book/PartBook';
import OneBook from './pages/components/Book/OneBook';
import AllBook from './pages/components/Book/AllBook';
import CreateBook from './pages/components/Book/CreateBook';
import ShowPopularBooks from './pages/components/showPopularBooks';
import ShowProduct from './pages/components/showProduct';
import Footer from './pages/components/footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSlice2 } from './pages/components/UserLogin/userSlice';
import FavoriteBooks from './pages/components/FavoriteBooks';
import Form from './form';
import ShowVideos from './pages/components/showVideos';
import FormVideos from './pages/components/FromVideos';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[100],
    },
    secondary: {
      main: '#ef9a9a',
    },
  },
});


function App() {

  // let userL = localStorage.getItem("user");
  // let user = useSelector(state => state.users.currentUser);
  // let dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("fffffffffffffffffff", userL)
  //   if (userL !== null) {
  //     dispatch(loginSlice2(JSON.stringify(userL)))
  //     console.log(user)
  //   }
  // }, [])

  return (
   
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        {/* <FormVideos /> */}
        {/* <TemporaryDrawer/> */}
        {/* <ShowProducts/> */}
        {/* <AllBook/> */}
        {/* <CreateBook /> */}
        <Routes>
          <Route path="ChengePassword" element={<Enter />} />
          <Route path="Login" element={<Login />} />
          <Route path="ShowProducts" element={<ShowProducts />} />
          <Route path="ShowPopularBooks" element={<ShowPopularBooks />} />
          {/* <Route path="Game" element={<Game />} /> */}
          <Route path="About" element={<About />} />
          <Route path="ShowUsers" element={<ShowUsers />} />
          <Route path='addProduct' element={<AddProduct />} />
          <Route path="filterCategory" element={<FilterCategory />} />
          <Route path="filterWriter" element={<FilterWriter />} />
          <Route path="filterYaer" element={<FilterYear />} />
          <Route path="OneBook" element={<OneBook />} />
          <Route path="LikesBooks" element={<FavoriteBooks />} />
          <Route path="form" element={<Form />} />
          <Route path="ShowVideos" element={<ShowVideos />} />
          <Route path="PartBook/:partIndex" element={<PartBook />} />
          <Route path="FormVideos" element={<FormVideos />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default App;
