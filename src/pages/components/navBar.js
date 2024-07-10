import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../components/navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUserServerApi } from "./API/userApi";
import { loginSlice } from "./UserLogin/userSlice";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
const NavBar = () => {
  const userList = useSelector((state) => state.users.usersList);
  const user = useSelector((state) => state.users.currentUser);
  const [open, setOpen] = React.useState(false);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let disp = useDispatch();
  let Navigate = useNavigate();

  let [error, seterror] = useState({});

  React.useEffect(() => {
    Navigate("/ShowProducts");
    console.log("navbar", user);
  }, []);

  const save = (data) => {
    setOpen(false);
    loginUserServerApi(data)
      .then((res) => {
        console.log(res.data);
        if (res.data === "") return;
        alert("login sucsess");
        let data = res.data;
        disp(loginSlice(res.data));
        Navigate("/ShowProducts");
      })
      .catch((data) => {
        Navigate("/Register");
      });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container-fuid" id="navBar">
      <div className="row">
        <div className="col">
          <Button variant="outlined" onClick={handleClickOpen}>
            {user ? user.username : <PersonOutlineOutlinedIcon />}
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>התחברות</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <form onSubmit={handleSubmit(save)} id="ff">
                  <TextField
                    error={errors && errors.email ? true : false}
                    type="txt"
                    placeholder="userName"
                    label="userName"
                    helperText={
                      error && error.username ? error.email.message : ""
                    }
                    {...register("username", {
                      required: { value: true, message: "required" },
                    })}
                  />
                  <br />

                  <TextField
                    error={errors && errors.password ? true : false}
                    type="password"
                    placeholder="password"
                    label="password"
                    helperText={
                      error && error.password ? error.password.message : ""
                    }
                    {...register("password", {
                      required: { value: true, message: "required" },
                    })}
                  />
                  <br />

                  <DialogContentText>
                    <Link to="ChengePassword" onClick={handleClose}>
                      שכחתי סיסמא
                    </Link>
                  </DialogContentText>
                  <DialogContentText>
                    <Link to="Login" onClick={handleClose}>
                      אין לי חשבון ואני רוצה להירשם
                    </Link>
                  </DialogContentText>
                  <DialogActions>
                    <Button onClick={handleClose}>ביטול</Button>

                    <Button type="submit" variant="text">
                      היכנס
                    </Button>
                  </DialogActions>
                </form>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        <nav className="col" >
          <BottomNavigation
            sx={{ width: 500 }}
            value={value}
            onChange={handleChange}
          >
            <Link to="ShowProducts">
              <BottomNavigationAction
                label="ספרים"
                value="ספרים"
                icon={<MenuBookOutlinedIcon />}
              />
            </Link>
            {user && user.user_type_id == 1 && (
              <Link to="ShowUsers">
                <BottomNavigationAction
                  label="משתמשים"
                  value="משתמשים"
                  icon={<PeopleAltOutlinedIcon />}
                />
              </Link>
            )}
            {user && user.user_type_id !== 1 && (
              <Link to="LikesBooks">
                <BottomNavigationAction
                  label="ספרים אהובים"
                  value="ספרים אהובים"
                  icon={<FavoriteBorderOutlinedIcon />}
                />
              </Link>
            )}
            <Link to="ShowPopularBooks">
              <BottomNavigationAction
                label="פופולרי"
                value="פופולרי"
                icon={<StarBorderOutlinedIcon />}
              />
            </Link>

            <Link to="ShowVideos">
              <BottomNavigationAction
                label="סרטוני הדרכה"
                value="סרטוני הדרכה"
                icon={<OndemandVideoOutlinedIcon />}
              />
            </Link>
            <Link to="About">
              <BottomNavigationAction
                label="אודות"
                value="אודות"
                icon={<ContactSupportOutlinedIcon />}
              />
            </Link>
          </BottomNavigation>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
