import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShowUsers from './showUsers';
import reduxer from "../../store/reduxer"
import { Navigate } from 'react-router-dom';
// import { Slice } from '@reduxjs/toolkit'; 
// import { useForm } from 'react-hook-form';
import ShowUser from './showUser';
import { useSelector } from 'react-redux';
const FilterUser = () => {
    const user = useSelector(item => item.users.user);
    const usertype = useSelector(item => item.idUser);
    return ( 
        <div>
               <Button variant="outlined" size="medium">   
       
               author
        </Button>
      
               <Button variant="outlined" size="medium"onClick={() =>  usertype && usertype.idUser ==4 && <ShowUser />}>
          user
        </Button>
        <Button variant="outlined" size="medium" >
        Premium user
        </Button>
        </div>
     );
}
 
export default FilterUser;