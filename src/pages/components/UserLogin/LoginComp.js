import React from 'react'

const LoginComp = () => {
  return (
    <Dialog
    open={open}
    onClose={handleClose}

>
    <DialogTitle>התחברות</DialogTitle>
    <DialogContent>
        <DialogContentText>
            <form onSubmit={handleSubmit(save)} id="ff">
                <TextField
                    error={errors && errors.email ? true : false}
                    type="txt"
                    placeholder="userName"
                    label="userName"
                    helperText={error && error.username ? error.email.message : ""}
                    {...register("username", { required: { value: true, message: "required" } })} /><br />

                <TextField
                    error={errors && errors.password ? true : false}
                    type="password"
                    placeholder="password"
                    label="password"
                    helperText={error && error.password ? error.password.message : ""}
                    {...register("password", { required: { value: true, message: "required" } })} /><br />

                <DialogContentText>
                    <Link to="ChengePassword" onClick={handleClose}>שכחתי סיסמא</Link>
                </DialogContentText>
                <DialogContentText>
                    <Link to="Login" onClick={handleClose}>אין לי חשבון ואני רוצה להירשם</Link>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose}>ביטול</Button>

                    <Button type="submit" variant="text"  >היכנס</Button></DialogActions>
            </form>
        </DialogContentText>
    </DialogContent>
</Dialog>
  )
}

export default LoginComp
