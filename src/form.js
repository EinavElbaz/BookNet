import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
export default function Form() {

    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic" label="שם הספר" variant="standard" /><br />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">סוג הפניה</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={type}
                    onChange={handleChange}
                    label="תיאור הפניה"
                >
                    <MenuItem value={10}>תלונה</MenuItem>
                    <MenuItem value={20}>הערה</MenuItem>
                    <MenuItem value={30}>הארה</MenuItem>
                    <MenuItem value={40}>בקשה לספר</MenuItem>
                </Select>
            </FormControl><br/>
            <TextField
                id="standard-multiline-static"
                label="תיאור הפניה"
                multiline
                rows={4}
                variant="standard"
            /><br/>
            <Button type="submit">שליחה</Button>
        </Box>
    );
}