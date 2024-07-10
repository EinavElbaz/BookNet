import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { addBook } from "../../../store/bookSlice";
import { addNewBookToServer } from "../API/BookApi";
import { useState } from "react";
export default function AddProduct() {

  
    let { register, handleSubmit, formState: { errors } } = useForm();
    let dispatch = useDispatch()
    let [error, seterror] = useState({})
  
    const addBookFunc = (details) => {
       
        
        addNewBookToServer(details).then(res => {
          
            
            alert("ההוספה הצליחה")
            console.log(res.data);
            dispatch(addBook(res.data))
        }).catch(err => {
            alert("ההוספה נכשלה")
            console.log(err)
        })
    }


    return <form onSubmit={handleSubmit(addBookFunc)}>

      
        <TextField
            error={errors && errors.namebook ? true : false}
            type="txt"
            placeholder="nameBook"
            label="שם ספר:"
            helperText={error && error.namebook ? error.namebook.message : ""}
            {...register("nameBook", { required: { value: true, message: "required" } })} /><br />

        <TextField
            error={errors && errors.nameWriter ? true : false}
            type="txt"
            placeholder="nameWriter"
            label="שם סופר/ת:"
            helperText={error && error.nameWriter ? error.nameWriter.message : ""}
            {...register("nameWriter", { required: { value: true, message: "required" } })} /><br />

        <TextField
            error={errors && errors.year ? true : false}
            type="txt"
            placeholder="year"
            label="שנת הוצאה לאור:"
            helperText={error && error.year ? error.year.message : ""}
            {...register("year", { required: { value: true, message: "required" } })} /><br />

        <TextField
            error={errors && errors.description ? true : false}
            type="num"
            placeholder="description"
            label="descrebtion"
            helperText={error && error.description ? error.description.message : ""}
            {...register("description", { required: { value: true, message: "required" } })} /><br />

        <TextField
            error={errors && errors.category ? true : false}
            type="txt"
            placeholder="category"
            label="קטגוריה :"
            helperText={error && error.category ? error.category.message : ""}
            {...register("category", { required: { value: true, message: "required" } })} /><br />


        <TextField
            error={errors && errors.image ? true : false}
            type="txt"
            placeholder="image"
            label="תמונה:"
            helperText={error && error.image ? error.image.message : ""}
            {...register("image", { required: { value: true, message: "required" } })} /><br />

        <Button type="submit" variant="text"  >הוסף</Button>
    </form>
}