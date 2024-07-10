import * as React from 'react';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FormDialog from './enterOrLogin';
import { useDispatch } from 'react-redux';
export default function Home() {
  let dispatch = useDispatch();

  return (

    <Button onClick={() => dispatch(<FormDialog />)}>
      <PersonOutlineOutlinedIcon />
    </Button>
  );
}