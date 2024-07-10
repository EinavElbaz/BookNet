// import * as React from 'react';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContentText from '@mui/material/DialogContentText';
// import TextField from '@mui/material/TextField';
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import '../../components/navBar.css'
// export default function FormDialog() {

//     let [enter, setenter] = useState({
//         id: " ",
//         email: " ",
//         password: " "
//     });
//     let [error, seterror] = useState({})
//     const changeForm = (e) => {
//         let inputEmail = e.target.email;
//         let inputValue = e.target.value;
//         let inputPassword = e.target.password;
//         //let copyDonation = { ...donation }
//         //copyDonation[inputName] = inputValue;
//         //setdonation(copyDonation);
//     }
//     const validate = () => {
//         let err = {};
//         if (!enter.email)
//             err.email = "שדה חובה";
//         if (enter.length < 8)
//             err.password = "הסיסמא חייבת להיות בת 8 תווים";
//         if (!enter.password)
//             err.password = "שדה חובה";
//         return err;
//     }
//     const save = (e) => {
//         e.preventDefault();
//         let result = validate()
//         if (Object.keys(result).length == 0) {
//             //alert(JSON.stringify(donation))
//             let html = document.getElementById("ff").innerHTML = "";
//             html = document.getElementById("ff").innerHTML = "הכניסה בוצעה בהצלחה"
//             //props.addFunc(donation)
//         }
//         seterror(result);
//     }
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     // function showLogin() {
//     //     const l = document.getElementById('login');
//     //     alert("vmhbdvhj")
//     //     document.getElementById('allForm').innerHTML = l;
//     // }
//     return (
//         <React.Fragment>
//             <Button color="secondary" onClick={handleClickOpen}>
//                 <PersonOutlineOutlinedIcon />
//             </Button>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 PaperProps={{
//                     component: 'form',
//                     onSubmit: (event) => {
//                         event.preventDefault();
//                         const formData = new FormData(event.currentTarget);
//                         const formJson = Object.fromEntries(formData.entries());
//                         const email = formJson.email;           
//                         handleClose();
//                     },
//                 }}
//             >
//                 <DialogTitle>הירשם</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="allForm">
//                         <div id="allForm">
//                             <form onSubmit={save} id="ff">

//                                 <TextField required type="email" name="email" label="איימל:" variant="standard" onChange={changeForm} error={error.email ? true : false}
//                                     helperText={error.email ? error.email : " "} /><br />
//                                 <TextField required name="password" label="סיסמא" variant="standard" onChange={changeForm} error={error.password ? true : false}
//                                     helperText={error.password ? error.password : " "} /><br />

//                             </form>
//                             <form id='login'>
//                                 <TextField required name="userName" label="user Name:" variant="standard" /><br />
//                                 <TextField required name="userPassword" label="user Password" variant="standard" onChange={changeForm} error={error.userPassword ? true : false}
//                                     helperText={error.userPassword ? error.userPassword : " "} /><br />
//                                 <TextField required type="phone" name="phone" label="phone:" variant="standard" /><br />
//                                 <TextField required type="email" name="email" label="email:" variant="standard" /><br />
//                                 <TextField required name="emailPassword" label="email Password" variant="standard" onChange={changeForm} error={error.emailPassword ? true : false}
//                                     helperText={error.emailPassword ? error.emailPassword : " "} /><br />
//                                 {/* <Button type="submit" variant="text"  >send</Button> */}
//                             </form>
//                         </div>
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogContentText>
//                     <Link to="ChengePassword" onClick={handleClickOpen}>שכחתי סיסמא</Link>
//                 </DialogContentText>
//                 <DialogContentText>
          
//                     <Link >אין לי חשבון ואני רוצה להירשם</Link>
//                 </DialogContentText>
//                 <DialogActions>
//                     <Button onClick={handleClose}>ביטול</Button>
//                     <Button type="submit">התחבר</Button>
//                 </DialogActions>
//             </Dialog>
//         </React.Fragment>
//     );
// }
