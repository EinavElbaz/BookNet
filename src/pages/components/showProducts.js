
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { saveAllBooksRedux, selectBook } from "../../store/bookSlice";
import { getAllBookFromServer } from "./API/BookApi";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import FilterYear from "../components/filterButton/filterYear";
import FilterCategory from "../components/filterButton/FilterCategory";
import FilterWriter from "../components/filterButton/filterWriter";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import ShowProduct from "./showProduct";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import "../components/filterButton//filter.css"
import "../components/navBar.css"
import { useTheme } from '@emotion/react';
import { MenuItem, Select } from '@mui/base';
import { TextField } from '@mui/material';
import { getAllCategoryApi } from './API/categoryApi';
import { getCategories } from './filterButton/categorySlice';
import { getAllUsers } from './UserLogin/userSlice';
import { getAllUsersApi } from './API/userApi';
import axios, { AxiosError } from 'axios';


export default function ShowProducts() {

    let user = useSelector(state => state.users.currentUser);
    // let users = useSelector(state => state.users.currentUser);
    const dis = useDispatch();


    //מערך הספרים המלא
    const books = useSelector(state => state.books.booksList);
    //מערך שעליו נעשה  את כל הסינונים
    const [filtersearch, setFiltersearch] = useState([]);
    //מערכי סינוני סלקטים
    const categoryArr = useSelector(state => state.categories.categorys)
    const yearArr = useSelector(state => state.yearss.years)
    const writerArr = useSelector(state => state.writerss.writers)
    // const users = useSelector(item => item.users.currentUser);
    const users = useSelector(item => item.users.usersList);





    //משתנים שלפיהם נסנן 4 תכונות של הספרים
    let [category, setCategory] = React.useState("");
    let [years, setYears] = React.useState("");
    let [year, setYear] = React.useState("");
    let [writer, setWriter] = React.useState("");
    // let [free, setFree] = React.useState("");

    const [inputValue, setInputValue] = useState("");


    const freeFilter = () => {

        let query = "";
        if (category != "") query += `?idCategore=${category}`
        if (year != "") { if (query.length > 0) query += `&yearBook=${year}`; else query += `?yearBook=${year}` }
        if (writer != "") { if (query.length > 0) query += `&idwriter=${writer}`; else query += `?idwriter=${writer}` }
        if (inputValue != "") { if (query.length > 0) query += `&namebook=${inputValue}`; else query += `?namebook=${inputValue}` }


        axios.get(`http://localhost:8000/books/filter${query}`)
            .then((res) => { console.log(res.data); setFiltersearch(res.data) })
            .catch((error) => console.log(error))


        // if (!books)
        //     return;
        // const freeFilterArr = [];
        // for (let book of books) {
        //     const yearBook = new Date(book.yearBook).getFullYear();//הוצאת השנה מתוךל מחרוזת של תאריך
        //     if (book.namebook.includes(inputValue)
        //         && (category == "" || book.name.includes(category))
        //         && (year == "" || yearBook == year)
        //         && (writer == "" || book.idwriter == writer))
        //         freeFilterArr.push(book);
        // }
        // console.log(filtersearch)
        // setFiltersearch(freeFilterArr);
    }


    useEffect(() => {
        freeFilter();
    }, [inputValue, category, year, writer]);

    //מולטי סינונים
    const theme = useTheme();

    // useEffect(() => {
    //     setFiltersearch(books); //בהתחלה אין סינונים אז נרצה לראות את כל המסעדות
    // }, [books])

    useEffect(() => {
        getAllBookFromServer()
            .then((res) => {
                console.log("res.data")
                console.log(res.data)
                let arr = [];
                res.data.forEach(book => {
                    arr.push(new Date(book.yearBook).getFullYear())
                });
                setYears(arr)
                console.log("arr")
                console.log(arr)
                setFiltersearch(res.data)
        
                dis(saveAllBooksRedux(res.data))
            })
            .catch((error) => { });

        getAllCategoryApi()
            .then((res) => {
                dis(getCategories(res.data))
            }).catch(err => { console.log(err); })

        getAllUsersApi()
            .then((res) => {
                dis(getAllUsers(res.data))
            }).catch(err => { console.log(err); })
    }, [])

    // const filterByServer = () => {
    //     console.log(category, year, writer)
    //     let query = "";
    //     if (category != "") query += `?idCategore=${category}`
    //     if (year != "") { if (query.length > 0) query += `&yearBook=${year}`; else query += `?yearBook=${year}` }
    //     if (writer != "") { if (query.length > 0) query += `&idwriter=${writer}`; else query += `?idwriter=${writer}` }
    //     console.log(query)
    //     axios.get(`http://localhost:8000/books/filter${query}`)
    //     .then((res)=>{console.log(res.data)})
    //     .catch((error)=>console.log(error))
    // }

    const deleteBook = (id) => {
        let arr = [...filtersearch]
        let index = arr.findIndex(b => b.idbook == id);
        arr.splice(index, 1);
        setFiltersearch(arr);
    }

    const navigate = useNavigate();
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));




    //----עיצובים לסלקטים----------
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    function getStyles() {
        return {
            fontWeight:
                theme.typography.fontWeightRegular
        };
    }
    //----עיצובים לסלקטים סוף----------

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return (
        <div class="container">
            <div class="reshima">
                <div class="reshima">
                    <FormControl
                        sx={{ m: 1, width: '25ch' }}
                        variant="outlined"
                        onChange={(e) => { setInputValue(e.target.value) }}
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            endAdornment={
                                <InputAdornment >
                                    <SearchIcon id="search" />
                                </InputAdornment>
                            }
                            label="Search"
                        />
                    </FormControl>
                    {/* <input type='text' placeholder='search' onChange={(e) => { setInputValue(e.target.value) }} /> */}
                    <select onChange={(e) => { setCategory(e.target.value) }}>
                        {/* <select onChange={(e) => { setCategory(e.target.value); filterByServer(e.target.value); }}> */}
                        <option value="">סנן לפי קטגוריה</option>
                        {categoryArr.length > 0 && categoryArr.map(c => <option value={c.idcategore}> {c.name}</option>)}
                    </select>

                    <select onChange={(e) => { setWriter(e.target.value) }}>
                        {/* <select onChange={(e) => { setWriter(e.target.value); filterByServer(); }}> */}
                        <option value="">סנן לפי סופר</option>
                        {users.length > 0 && users.map(w => <>{w.user_type_id == 2 && <option value={w.Id}>{w.username}</option>}</>)}
                    </select>

                    <select onChange={(e) => { setYear(e.target.value) }}>
                        {/* <select onChange={(e) => { setYear(e.target.value); filterByServer(); }}> */}
                        <option value="">סנן לפי שנת הוצאה</option>
                        {years.length > 0 && years.map(y => <option value={y}> {y}</option>)}
                    </select>
                    {/* <FilterCategory id="f" setCategory={setCategory} filterArr={filterArr} />
                    <FilterYear id="f" setYears={setYears} filterArr={filterArr} />
                    <FilterWriter id="f" setWriter={setWriter} filterArr={filterArr} /> */}
                </div>
            </div>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >

                {filtersearch.length > 0 && filtersearch.map(b => <ShowProduct key={b.idbook} book={b} deleteBook={deleteBook} />)}
                {user && user.user_type_id === 1 &&
                    <Button onClick={() => { navigate("/addProduct") }}>
                        הוסף ספר
                    </Button>
                }
            </Box>



        </div>
    );
}   