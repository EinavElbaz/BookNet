import MenuItem from '@mui/material/MenuItem';

const ShowWriter= (props) => {
    return (
        <MenuItem sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {props.writer.nameWriter}
        </MenuItem>
    );
}

export default ShowWriter;