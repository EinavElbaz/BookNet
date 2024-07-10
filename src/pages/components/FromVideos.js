
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from "react";
import { addNewVideosToServer, getVideosFromServer } from "./API/videosApi";
import { addVideos } from "../components/videosSlice";





const FormVideos = (details) => {

    let { register, handleSubmit, formState: { errors } } = useForm();
    let dispatch = useDispatch()
    let [error, seterror] = useState({})

    const addVideoFunc = (details) => {
        console.log("details");
        console.log(details);
        addNewVideosToServer(details).then(res => {
            alert("ההוספה הצליחה")
            console.log(res.data);
           
        }).catch(err => {
            alert("ההוספה נכשלה")
            console.log(err)
        })
    }


    return <form onSubmit={handleSubmit(addVideoFunc)}>

        <title>העלאת סרטונים</title>
        <h2>העלה סרטון</h2>
        <TextField
            error={errors && errors.Name_Videos ? true : false}
            type="txt"
            placeholder="Name_Videos"
            label="שם הסרטון:"
            helperText={error && error.Name_Videos ? error.Name_Videos.message : ""}
            {...register("Name_Videos", { required: { value: true, message: "required" } })} /><br />

        <TextField
            error={errors && errors.Videos_Link ? true : false}
            type="txt"
            placeholder="Videos_Link"
            label="לינק"
            helperText={error && error.Videos_Link ? error.Videos_Link.message : ""}
            {...register("Videos_Link", { required: { value: true, message: "required" } })} /><br />




        <Button type="submit" variant="text" >הוסף סרטון</Button>
    </form>
}
export default FormVideos;