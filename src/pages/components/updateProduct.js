
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

export default function UpdateProduct() {
useSelector(state=>state.book.selectBookForEdit);
let { register, handleSubmit, formState: { errors } } = useForm();
let dispatch = useDispatchatch()
let [error, seterror] = useState({})



return <form onSubmit={handleSubmit(addBookFunc)}>
       <TextField
            error={errors && errors.nameBook ? true : false}
            type="txt"
            placeholder="nameBook"
            label="שם ספר:"
            helperText={error && error.nameBook ? error.nameBook.message : ""}
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
            label="תיאור :"
            helperText={error && error.year ? error.year.message : ""}
            {...register("year", { required: { value: true, message: "required" } })} /><br />

    
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