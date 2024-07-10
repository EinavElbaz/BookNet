import { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useForm } from "react-hook-form";
import { signUpServerApi } from "../API/userApi";
import { loginSlice } from "./userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


export default function Login() {

    let disp = useDispatch();
    let Navigate= useNavigate();
    const [open, setOpen] = React.useState(true);
    let [error, seterror] = useState({})
    let { register, handleSubmit, formState: { errors , isDirty } } =  useForm();
   //יציאה
    const save = (data) => {
    
        signUpServerApi(data).then((res) => {
                alert(" sucsess")
                console.log("login ", res.data);
                disp(loginSlice(res.data))
               
            })
            .catch((err) => {
                alert("כישלון")
                Navigate("/Register")
            })
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}

            >
                <form onSubmit={handleSubmit(save)} >

                    <TextField
                        error={errors && errors.userName ? true : false}
                        type="txt"
                        placeholder="userName"
                        label="user Name:"
                        helperText={error && error.userName ? error.userName.message : ""}
                        {...register("userName", { required: { value: true, message: "required" } })} /><br />

                    <TextField
                        error={errors && errors.userPassword ? true : false}
                        type="password"
                        placeholder="userPassword"
                        label="user Password"
                        helperText={error && error.userPassword ? error.userPassword.message : ""}
                        {...register("userPassword", { required: { value: true, message: "required" } })} /><br />

                    <TextField
                        error={errors && errors.phone ? true : false}
                        type="phone"
                        placeholder="phone"
                        label="phone:"
                        helperText={error && error.phone ? error.phone.message : ""}
                        {...register("phone", { required: { value: true, message: "required" } })} /><br />

                    <TextField
                        error={errors && errors.email ? true : false}
                        type="email"
                        placeholder="email"
                        label="email:"
                        helperText={error && error.email ? error.email.message : ""}
                        {...register("email", { required: { value: true, message: "required" } })} /><br />

                    <TextField
                        error={errors && errors.emailPassword ? true : false}
                        type="password"
                        placeholder="emailPassword"
                        label="email Password:"
                        helperText={error && error.emailPassword ? error.emailPassword.message : ""}
                        {...register("emailPassword", { required: { value: true, message: "required" } })} /><br />
                    <Button type="submit" variant="text"  >send</Button>

                </form>
            </Dialog>
        </React.Fragment>
    )

}