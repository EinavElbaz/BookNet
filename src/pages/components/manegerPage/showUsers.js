//import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAllUsersApi } from '../API/userApi';
import ShowUser from './showUser';
export default function ShowUsers() {

    useEffect(()=>{
        getAllUsersApi()
        .then((res)=>{
            setUsers(res.data);
            console.log(res.data)
        })
        .catch((error)=>{

        })

    },[])

    //const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    return(
    <Box sx={{ display: 'flex', flexWrap: 'wrap'  }}>
        {users.map(u => <p><ShowUser user={u} /></p>)}
    </Box>)
}     