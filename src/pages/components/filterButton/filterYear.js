import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import ShowYear from './showYears';
import { OutlinedInput } from '@mui/material';
import { useTheme } from '@emotion/react';
import { saveYears } from '../../../store/bookSlice';
export default function FilterYear({setYears , filterArr}) {
  const [personName, setPersonName] = React.useState([]);
  const theme = useTheme();
  const yearss = useSelector(state => state.yearss.years)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setYears(event.target.value);
    filterArr();
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    

    
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
        <InputLabel id="demo-multiple-name-label">שנה</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          label="שנה"
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {yearss.map((year) => (
            <MenuItem
              key={year.idYear}
              value={year.idYear}
              style={getStyles(year, personName, theme)}
            >
              {year.year}

            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

  );
}