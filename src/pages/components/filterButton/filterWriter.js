import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import ShowWriter from './showWriter';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { MenuItem, OutlinedInput } from '@mui/material';
import { filter, saveWriter } from '../../../store/bookSlice';

export default function FilterWriter({setWriter , filterArr}) {

const [personName, setPersonName] = React.useState([]);
const theme = useTheme();
  const writerr = useSelector(state => state.writerss.writers)
  const dispatch = useDispatch();

const handleChange = (event) => {
  setWriter(event.target.value)
  filterArr();
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
  
  // dispatch(saveWriter(event.target.value))
  // dispatch(filter())
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

return (
  <div>
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">סופר</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={personName}
        label="סופר"
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {writerr.map((writer) => (
          <MenuItem
            key={writer.idWriter}
            value={writer.idWriter}
            
            style={getStyles(writer, personName, theme)}
          >
            {writer.nameWriter}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>

);
}