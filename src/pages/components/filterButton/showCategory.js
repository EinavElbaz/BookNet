import MenuItem from '@mui/material/MenuItem';

const ShowCategory = (props) => {
    return (
        <MenuItem sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {props.category.typeCategory}
        </MenuItem>
    );
}

export default ShowCategory;