import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import ShowCategory from './showCategory';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MenuItem } from '@mui/material';
import { filter, saveCategoy } from '../../../store/bookSlice';



export default function FilterCategory({setCategory , filterArr}) {
  const categoryy = useSelector(state => state.categories.categorys)
  const [personName, setPersonName] = React.useState([]);
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleChange = (event) => {
     setCategory(event.target.value);
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
        <InputLabel id="demo-multiple-name-label">קטגוריה</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          
          value={personName}
          label="קטגוריה"
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {categoryy.map((catgo) => (
            <MenuItem
              key={catgo.idCategory}
              value={catgo.idCategory}
              style={getStyles(catgo, personName, theme)}
            >
              {catgo.typeCategory}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
//     </div>

  );
}

