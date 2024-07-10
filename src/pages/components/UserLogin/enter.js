import { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Dialog, DialogContentText } from "@mui/material";
import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserServerApi } from "../API/userApi";
import { loginSlice } from "./userSlice";

export default function Enter() {

    let [error, seterror] = useState({})
    const [open, setOpen] = React.useState(true);
    let { register, handleSubmit, formState: { errors } } = useForm();
    
    let disp = useDispatch();
    let Navigate= useNavigate();

    const handleClose = () => {
        setOpen(false);
    };

    const save = (data) => {
        
        loginUserServerApi(data)
            .then((res) => {
                alert("login sucsess")
                console.log("login ", res.data);
                let data = res.data;
                disp(loginSlice(res.data))
                Navigate("/AllProduct")
            })
            .catch((errors) => {
                Navigate("/Register")
            })
    }

    return <form id="ff">

        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>התחברות</DialogTitle>
                <DialogContent>
                    <DialogContentText id="allForm">
                        <div id="allForm">
                            <form onSubmit={handleSubmit(save)} id="ff">

                                <TextField
                                    error={errors && errors.email ? true : false}
                                    type="email"
                                    placeholder="email"
                                    label="email"
                                    helperText={error && error.username ? error.email.message : ""}
                                    {...register("username", { required: { value: true, message: "required" } })} /><br />

                                <TextField
                                    error={errors && errors.password ? true : false}
                                    type="password"
                                    placeholder="password"
                                    label="password"
                                    helperText={error && error.password ? error.password.message : ""}
                                    {...register("password", { required: { value: true, message: "required" } })} /><br />

                                <Button type="submit" variant="text"  >send</Button>
                            </form>

                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>

    </form>
}
