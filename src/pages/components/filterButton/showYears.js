import MenuItem from '@mui/material/MenuItem';

const ShowYear= (props) => {
    return (
        <MenuItem sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {props.year.year}
        </MenuItem>
    );
}

export default ShowYear;